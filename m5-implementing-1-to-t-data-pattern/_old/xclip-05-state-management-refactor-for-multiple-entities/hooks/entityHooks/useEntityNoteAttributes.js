import useGeneralizedCrudMethods from "../useGeneralizedCrudMethods";
import noteAttributes from "../../data/noteAttributes.json";
import { v4 as uuidv4 } from "uuid";

function useEntityNoteAttributes() {
  const {
    data,
    error,
    createRecord,
    updateRecord,
    deleteRecord,
  } = useGeneralizedCrudMethods(
    noteAttributes
  );

  function updateNoteAttributesEntity(
    noteId,
    pinned,
    important
  ) {
    if (pinned || important) {
      const noteAttributes =
        noteAttributesData.find(
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
        createRecord(noteAttributes.id, {
          id: uuidv4(),
          noteId: id,
          pinned: pinned ? 1 : 0,
          important: important ? 1 : 0,
          updateDate:
            new Date().toISOString(),
        });
      }
    }
  }

  function deleteNoteAttributesEntity(id) {
    data
      .filter((rec) => rec.noteId === id)
      .forEach((rec) =>
        deleteRecord(rec.id)
      );
  }

  return {
    data,
    error,
    updateNoteAttributesEntity,
    deleteNoteAttributesEntity,
  };
}

export default useEntityNoteAttributes;
