import { useState } from 'react';

function NoteTextarea({notes,onNotesChange}) {
  //const [notes, setNotes] = useState('');

  return (
    <>
      <div className="notes-header">
        <h2>Notes</h2>
      </div>

      <textarea
        className="notes-input"
        value={notes}
        onChange={(event) => onNotesChange(event.target.value)}
        placeholder="Write your notes here..."
      />

    </>
  );
}

export default NoteTextarea;