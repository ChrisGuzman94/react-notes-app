import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  };

  const handleSave = () => {
    handleAddNote(noteText);
    setNoteText("");
  };
  return (
    <div className="note new">
      <textarea
        value={noteText}
        rows="8"
        cols="10"
        onChange={handleChange}
        placeholder="Type to add note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining </small>
        <button onClick={handleSave} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
