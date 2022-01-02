import { useContext } from "react";
import { NotesContext } from "./App";

function Menu() {
  const { createNote } = useContext(NotesContext);

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
    <ul className="nav nav-pills p-3 bg-white mb-3 founded-pill align-items-center">
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
    </ul>
  );
}

export default Menu;
