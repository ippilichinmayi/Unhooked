import NoteTextarea from './components/textarea'
import Timestamp from './components/timestamp';
import { useEffect } from 'react';
import { useState } from 'react';
import { loadVideoData } from "./storage";

function NotesPanel() {
    const [notes, setNotes] = useState("");
    const [timestamps, setTimestamps] = useState([]);

    useEffect(() => {
        async function load() {
            const data = await loadVideoData();

            setNotes(data.notes);
            setTimestamps(data.timestamps);
        }

        load();
    }, []);

    return (
        <section className='notes-panel'>
            <NoteTextarea
                notes={notes}
                setNotes={setNotes}
            />

            <Timestamp
                vec={timestamps}
                setVec={setTimestamps}
            />
        </section>
        
    );
}

export default NotesPanel;