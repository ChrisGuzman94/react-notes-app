import Note from "./Note";
import AddNote from "./AddNote";
const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          handleDeleteNote={handleDeleteNote}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
