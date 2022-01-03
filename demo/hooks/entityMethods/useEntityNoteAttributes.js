import { v4 as uuidv4 } from "uuid";
import useGeneralizedCrudMethods from "../useGeneralizedCrudMethods";
import noteAttributes from "../../data/noteAtributes.json";

function useEntityNoteAttributes() {
  const { data, error, createRecord, updateRecord, deleteRecord } =
    useGeneralizedCrudMethods(noteAttributes);

  function updateNoteAttributesEntity(noteId, pinned, important) {
    const noteAtribute = data.find((rec) => rec.noteId === noteId);
    if (noteAtribute) {
      updateRecord(noteAtribute.id, {
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    } else {
      createRecord({
        id: uuidv4(),
        noteId: noteId,
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    }
  }

  function deleteNoteAttributesEntity(noteId) {
    data
      .filter((rec) => rec.noteId === noteId)
      .forEach((rec) => deleteRecord(rec.id));
  }

  return {
    data,
    error,
    updateNoteAttributesEntity,
    deleteNoteAttributesEntity,
  };
}

export default useEntityNoteAttributes;
