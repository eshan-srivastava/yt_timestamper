import React, { useState } from "react";

const Button = () => {
    const [time, setTime] = useState(0);

    function captureTime(){
        const video : HTMLMediaElement = document.querySelector('video')!;
        // player.getVideoUrl():String
        // const ytplayer = document.getElementById("movie_player")!;
        // const time = ytplayer.getCurrentTime();
        if (video === null){

            console.log("No video source detected");
        }
        else{
            const currtime = Math.floor(video.currentTime);
            setTime(currtime);
            console.log("Currently logged time: ", currtime);    
        }
    }
    
    return (
        <>
        <button className="border-black bg-red-700 text-white text-md px-6 rounded-full" type="button" onClick={captureTime}> Capture! </button>
        <p className="text-sm mx-auto my-1">Timestamp captured is: {time}</p>
        
        </>
    )
}

export default Button;