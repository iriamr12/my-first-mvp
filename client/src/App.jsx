import { useState } from 'react'
import './App.css'
import{Routes, Route, Link, NavLink} from "react-router-dom"
import Home from './components/Home'
import Education from './components/Education'
import Health from './components/Health'


function App() {

  return (
   <div>
<h1>My digital environment</h1>

      {/* <Link to="/" activeStyle="active">Home</Link>
      <br/>
      <Link to="/education">Education</Link> */}
      <NavLink to="/" activeStyle="active">Home</NavLink>
      <br/>
      <NavLink to="/education">Education</NavLink>


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/education" element={<Education />} />
  <Route path="/health" element={<Health />} />
</Routes>
   </div>
  )
}

export default App
