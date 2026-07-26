import { useState } from "react";

function Timestamp({vec,onAddTimestamp}) {
   // const [vec, setVec] = useState([]);

    function saveTimestamp() {
        const video = document.querySelector("video");
        if (!video) return;
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if(!ctx) return;
        ctx.drawImage(video, 0, 0);

        const image = canvas.toDataURL("image/png");
        

        const time = video.currentTime;   

        onAddTimestamp({time, image });
    }

    return (
        <div className="timestamp-container">
            <button onClick={saveTimestamp}>
                Save Note
            </button> 


        <div className="timestamp-list">

        {vec.map((item, index) => (
                <div className="timestamp-card" key={index}>
                    <img className="timestamp-image" src={item.image} alt="timeframe" onClick={() => {
        const video = document.querySelector("video");
        if (video) {
            video.currentTime = item.time;
            video.play();
        }
    }} />
                    {Math.floor(item.time / 60)}:{Math.floor(item.time % 60).toString().padStart(2, "0")} minutes
                </div>
            ))}

        </div>
           
        </div>
    );
}

export default Timestamp;