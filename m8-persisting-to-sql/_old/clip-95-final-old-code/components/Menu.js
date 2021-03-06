import { NotesContext, NotesModalContext } from "./App";
import { useContext } from "react";

function Menu({ currentTab, setCurrentTab }) {
  const notesModalState = useContext(NotesModalContext);

  function createNoteFn() {
    notesModalState.modalNoteId.set(0);
    notesModalState.modalNoteTitle.set("");
    notesModalState.modalNoteDescription.set("");
    notesModalState.modalNoteTagIds.set([]);
    notesModalState.modalShow.set(true);
  }

  return (
    <ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
      <li className="nav-item">
        <a
          href="#"
          onClick={() => {
            setCurrentTab("notes");
          }}
          className={
            currentTab === "notes"
              ? "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
              : "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
          }
          id="all-category"
        >
          <i className="icon-layers mr-1"></i>
          <span className="d-none d-md-block">All Notes</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          onClick={() => {
            setCurrentTab("logs");
          }}
          className={
            currentTab === "logs"
              ? "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
              : "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
          }
          id="all-category"
        >
          <i className="icon-layers mr-1"></i>
          <span className="d-none d-md-block">Change Logs</span>
        </a>
      </li>

      {currentTab === "notes" && (
        <li className="nav-item ml-auto">
          <a
            href="#"
            onClick={createNoteFn}
            className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
          >
            <i className="icon-note m-1"></i>
            <span className="d-none d-md-block font-14">Add Notes</span>
          </a>
        </li>
      )}
    </ul>
  );
}

export default Menu;
