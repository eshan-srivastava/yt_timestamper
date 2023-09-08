import React, { useState } from 'react'
import Button from '../src/components/Button'
import viteLogo from '/vite.svg'
// import VideoCard from './components/video-card'
import Browser from 'webextension-polyfill'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  
  function handleClick () {
    Browser.runtime.sendMessage("content-script activated");
    console.log("c-log of content-script activate, proceeding to capture time");
    captureTime();
    console.log("Time captured: ", time);
  }

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div onClick={handleClick}>
          <Button {...{time}}/>
        </div>
      </div>
      {/* <VideoCard/> */}
    </>
  )
}

export default App
