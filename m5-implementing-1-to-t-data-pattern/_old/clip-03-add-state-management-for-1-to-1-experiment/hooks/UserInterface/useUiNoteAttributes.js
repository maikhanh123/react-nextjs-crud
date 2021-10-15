import { v4 as uuidv4 } from "uuid";
import noteAttributes from "../../data/noteAttributes.json";
import { useGeneralizedCrudMethods } from "../useGeneralizedCrudMethods";

function useUiNoteAttributes() {
  const {
    data,
    error,
    createRecord,
    updateRecord,
    deleteRecord,
  } = useGeneralizedCrudMethods(
    noteAttributes
  );

  function createNoteAttributesUi(
    noteId,
    title,
    description,
    pinned,
    important
  ) {
    if (pinned || important) {
      createNoteAttributesData({
        id: uuidv4(),
        noteId: noteId,
        pinned: pinned ? 1 : 0,
        important: important ? 1 : 0,
        updateDate: new Date().toISOString(),
      });
    }
  }

  function updateNoteAttributesUi(
    noteId,
    pinned,
    important
  ) {
    if (
      pinned != undefined &&
      important != undefined
    ) {
      const noteAttributes = data.find(
        (rec) => rec.noteId === noteId
      );
      if (noteAttributes) {
        updateRecord(noteAttributes.id, {
          pinned: pinned ? 1 : 0,
          important: important ? 1 : 0,
          updateDate:
            new Date().toISOString(),
        });
      } else {
        createRecord({
          id: uuidv4(),
          noteId: noteId,
          pinned: pinned ? 1 : 0,
          important: important ? 1 : 0,
          updateDate:
            new Date().toISOString(),
        });
      }
    }
  }

  function deleteNoteAttributesUi(id) {
    data
      .filter((rec) => rec.noteId === id)
      .forEach((rec) =>
        deleteRecord(rec.id)
      );
  }

  return {
    data,
    error,
    createNoteAttributesUi,
    updateNoteAttributesUi,
    deleteNoteAttributesUi,
  };
}

export default useUiNoteAttributes;
