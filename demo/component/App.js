import NoteList from "./NoteList.js";
import useNotes from "../hooks/useNotes";
import Menu from "./menu.js";
import { createContext } from "react";

export const NotesContext = createContext({
  notesData: [],
  notesDataError: [],
  createNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
});

function App() {
  const contextValue = useNotes();

  if (contextValue.notesDataError) {
    return <div>error: {contextValue.notesDataError}</div>;
  }
  if (!contextValue.notesData) {
    return <div>...loading</div>;
  }

  return (
    <div className="container">
      <NotesContext.Provider value={contextValue}>
        <Menu />
        <NoteList />
      </NotesContext.Provider>
    </div>
  );
}

export default App;
