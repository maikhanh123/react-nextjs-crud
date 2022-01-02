import NoteList from "./NoteList.js";
import useNotes from "../hooks/useNotes";
import Menu from "./menu.js";

function App() {
  const { notesData, notesDataError, createNote } = useNotes();

  if (notesDataError) {
    return <div>error: {notesDataError}</div>;
  }
  if (!notesData) {
    return <div>...loading</div>;
  }

  function createNoteFn() {
    const timeOfDay = new Date().toLocaleDateString("en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    createNote(
      `Note at ${timeOfDay}`,
      `This sample note create at ${timeOfDay}`
    );
  }

  return (
    <div className="container">
      <Menu createNoteFn={createNoteFn} />
      <NoteList notesData={notesData} />
    </div>
  );
}

export default App;
