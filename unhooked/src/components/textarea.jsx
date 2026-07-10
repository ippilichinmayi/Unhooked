import { useState } from 'react';

function NoteTextarea() {
  const [notes, setNotes] = useState('');

  return (
    <section className="notes-panel">
      <div className="notes-header">
        <h2>Notes</h2>
      </div>

      <textarea
        className="notes-input"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Write your notes here..."
      />
    </section>
  );
}

export default NoteTextarea;