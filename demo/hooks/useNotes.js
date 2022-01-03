import notes from "../data/notes.json";
import noteAtributes from "../data/noteAtributes.json";
import { v4 as uuidv4 } from "uuid";
import useGeneralizedCrudMethods from "./useGeneralizedCrudMethods";

function useNotes() {
  const {
    data: notesData,
    error: notesDataError,
    createRecord: createNotesData,
    updateRecord: updateNotesData,
    deleteRecord: deleteNotesData,
  } = useGeneralizedCrudMethods(notes);

  const {
    data: noteAttributesData,
    error: noteAttributesDataError,
    createRecord: createNoteAttributesData,
    updateRecord: updateNoteAttributesData,
    deleteRecord: deleteNoteAttributesData,
  } = useGeneralizedCrudMethods(noteAtributes);

  function createNote(title, description) {
    const newNote = {
      id: uuidv4(),
      title,
      description,
      createDate: new Date().toISOString(),
    };
    createNotesData(newNote);
  }

  function updateNote(id, title, description, pinned, important) {
    const updateObject = {
      title,
      description,
    };
    updateNotesData(id, updateObject);
    const noteAtribute = noteAttributesData.find((rec) => rec.noteId === id);
    if (noteAtribute) {
      updateNoteAttributesData(noteAtribute.id, {
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    } else {
      createNoteAttributesData({
        id: uuidv4(),
        noteId: id,
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    }
  }

  function deleteNote(id) {
    deleteNotesData(id);
    noteAttributesData
      .filter((rec) => rec.noteId === id)
      .forEach((rec) => deleteNoteAttributesData(rec.id));
  }

  return {
    notesData,
    notesDataError,
    noteAttributesData,
    noteAttributesDataError,
    createNote,
    updateNote,
    deleteNote,
  };
}

export default useNotes;
