import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";
import Header from "./components/Header";

function App() {
  /* State that components can modify   */
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Note 1",
      date: "02/02/2022",
    },
    {
      id: nanoid(),
      text: "Note 2",
      date: "02/02/2022",
    },
    {
      id: nanoid(),
      text: "Note 3",
      date: "02/02/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);
  /*-------------------------------------------*/

  /* Methods used in components */

  const addNote = (text) => {
    const date = new Date();

    const addedNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString,
    };

    /* A new state is created instead of updating directly to avoid state mutation*/
    const updatedNotes = [...notes, addedNote];
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  /* ------------------------------------------*/
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <SearchBar handleSearch={setSearchText} />
        <NoteList
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
        />
      </div>
    </div>
  );
}

export default App;
