import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const index = document.createElement('div');
index.id = 'extension-root';

const body = document.querySelector('body');
if (body){
  body.prepend(index);
}

// ReactDOM.createRoot(document.getElementById('root')!).render(
ReactDOM.createRoot(index).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
