import NoteTextarea from './components/textarea'
import Timestamp from './components/timestamp';
import { useEffect } from 'react';
import { useState } from 'react';
import { loadVideoData, saveVideoData } from "./storage";



function NotesPanel() {
    const [notes, setNotes] = useState("");
    const [timestamps, setTimestamps] = useState([]);

    async function handleAddTimestamp(newTimestamp) {
        const updated = [...timestamps, newTimestamp];

        setTimestamps(updated);

        await saveVideoData({
            notes,
            timestamps: updated
        });
    }

    useEffect(() => {
        async function load() {
            const data = await loadVideoData();

            setNotes(data.notes);
            setTimestamps(data.timestamps);
        }

        load();
    }, []);

    async function handleNotesChange(newNotes) {
    setNotes(newNotes);

    await saveVideoData({
        notes: newNotes,
        timestamps
    });
}
    return (
        <section className='notes-panel'>
            <NoteTextarea
                notes={notes}
                onNotesChange={handleNotesChange}
            />

            <Timestamp
                vec={timestamps}
                onAddTimestamp={handleAddTimestamp}
            />
        </section>
        
    );
}

export default NotesPanel;