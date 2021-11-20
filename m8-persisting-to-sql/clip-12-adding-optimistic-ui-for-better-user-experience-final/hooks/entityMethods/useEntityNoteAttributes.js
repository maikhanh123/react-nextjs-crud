import { v4 as uuidv4 } from "uuid";
import useGeneralizedCrudMethods from "../useGeneralizedCrudMethods";

function useEntityNoteAttributes(url, errorNotificationFn) {
  const { data, error, createRecord, updateRecord, deleteRecord } =
    useGeneralizedCrudMethods(url, errorNotificationFn);

  function updateNoteAttributesEntity(noteId, pinned, important) {
    const noteAttributes = data.find((rec) => rec.noteId === noteId);
    if (noteAttributes) {
      updateRecord(noteAttributes.id, {
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

  function deleteNoteAttributesEntity(id) {
    data
      .filter((rec) => rec.noteId === id)
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
