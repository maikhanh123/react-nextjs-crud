import { useEffect, useState } from "react";
import notes from "../data/notes.json";
import { v4 as uuidv4 } from "uuid";
import useGeneralizedCrudMethods from "./useGeneralizedCrudMethods";

function useNotes() {
  // const [notesData, setNotesData] = useState();
  // const [notesDataError, setNotesDataError] = useState();

  const {
    data: notesData,
    error: notesDataError,
    createRecord: createNotesData,
    updateRecord: updateNotesData,
    deleteRecord: deleteNotesData,
  } = useGeneralizedCrudMethods(notes);

  //   useEffect(() => {
  //     async function getData() {
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //       try {
  //         setNotesData(notes);
  //       } catch (e) {
  //         setNotesDataError(e);
  //       }
  //     }
  //     getData();
  //   }, []);

  function createNote(title, description) {
    const newNote = {
      id: uuidv4(),
      title,
      description,
      createDate: new Date().toISOString(),
    };
    createNotesData(newNote);
  }

  function updateNote(id, title, description) {
    const updateObject = {
      title,
      description,
    };
    updateNotesData(id, updateObject);
  }

  function deleteNote(id) {
    deleteNotesData(id);
  }

  return { notesData, notesDataError, createNote, updateNote, deleteNote };
}

export default useNotes;
