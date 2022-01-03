import NoteList from "./NoteList.js";
import useNotes from "../hooks/useNotes";
import Menu from "./Menu.js";
import { createContext } from "react";
import useNotesModal from "../hooks/useNotesModal";

export const NotesContext = createContext({
  notesData: [],
  notesDataError: [],
  noteAttributesData: [],
  noteAttributesDataError: [],
  createNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
});

export const NotesModalContext = createContext({
  modalShow: false,
  setModalShow: () => {},
  modalNoteId: 0,
  setModalNoteId: () => {},
  modalTitle: "",
  setModalTitle: () => {},
  modalDescription: "",
  setModalDescription: () => {},
});

function App() {
  const contextValue = useNotes();
  const contextValueNotesModel = useNotesModal();

  if (contextValue.notesDataError) {
    return <div>error: {contextValue.notesDataError}</div>;
  }
  if (!contextValue.notesData) {
    return <div>...loading</div>;
  }

  return (
    <div className="container">
      <NotesContext.Provider value={contextValue}>
        <NotesModalContext.Provider value={contextValueNotesModel}>
          <Menu />
          <NoteList />
        </NotesModalContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}

export default App;
