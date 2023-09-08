import React from 'react'
import Button from './components/Button'
import viteLogo from '/vite.svg'
// import VideoCard from './components/video-card'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Button />
      </div>
      {/* <VideoCard/> */}
    </>
  )
}

export default App
