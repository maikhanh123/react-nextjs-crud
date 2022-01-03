import NoteList from "./NoteList.js";
import useNotes from "../hooks/useNotes";
import Menu from "./Menu.js";
import NoteChangeLogs from "./NoteChangeLogs.js";
import { createContext, useState } from "react";
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
  modalNoteTagIds: [],
  setModalNoteTagIds: () => {},
  tagNamesNewValue: "",
  setTagNamesNewValue: () => {},
});

function App() {
  const contextValue = useNotes();
  const contextValueNotesModel = useNotesModal();
  const [currentTab, setCurrentTab] = useState("notes"); // ["notes", "logs"]

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
          <Menu currentTab={currentTab} setCurrentTab={setCurrentTab} />
          {currentTab === "notes" && <NoteList />}
          {currentTab === "logs" && <NoteChangeLogs />}
        </NotesModalContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}

export default App;
