import { useState } from "react";

function Timestamp() {
    const [vec, setVec] = useState([]);

    function saveTimestamp() {
        const video = document.querySelector("video");

        if (!video) return;

        const time = video.currentTime;   

        setVec(prev => [...prev, time]);
    }

    return (
        <div>
            <button onClick={saveTimestamp}>
                Save Timestamp
            </button>

            {vec.map((time, index) => (
                <div key={index}>
                    {Math.floor(time / 60)}:{Math.floor(time % 60).toString().padStart(2, "0")} minutes
                </div>
            ))}
        </div>
    );
}

export default Timestamp;