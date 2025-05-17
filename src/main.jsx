import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {index.html} />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/skills" element = {<Skills/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)