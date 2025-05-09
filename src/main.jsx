import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/about" element = {< About /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

function main () {
  return (
    
    <img src={photo.jpg} alt="Failed to load image" />
  )
}