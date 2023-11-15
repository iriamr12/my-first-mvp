import { useState } from 'react'
import './App.css'
import{Routes, Route, Link, NavLink} from "react-router-dom"
import Home from './pages/Home'
import Education from './pages/Education'
import Health from './pages/Health'
import Citizenship from './pages/Citizenship'
import Vehicles from './pages/Vehicles'
import Employment from './pages/Employment'


function App() {
  
  return (
   <div>
        <nav className='navbar'>
          <NavLink to="/" >Home</NavLink>
          <br/>
            <NavLink to="/citizenship">Citizenship</NavLink>
            <br/>
            <NavLink to="/education">Education</NavLink>
            <br/>
            <NavLink to="/health">Health</NavLink>
            <br/>
            <NavLink to="/vehicles">Vehicles</NavLink>
        </nav>
    
        <h1>My digital environment</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/health" element={<Health />} />
          <Route path="/citizenship" element={<Citizenship />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
    </div>
   


  )
}

export default App
