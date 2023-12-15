import React from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom" 
import "./Navbar.css"
import { useState } from "react"

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false)

  return (
   <nav>
    
    <Link to="/" className='title'>HOMEPAGE</Link>
    <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
        <ul className={menuOpen ? "open" : ""}>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/missinggradepage">Missing Grade</NavLink>
        </li>
        <li>
            <NavLink to="/gradereport">Grade Report</NavLink>
        </li>
        <li>
            <NavLink to="/instructorcontact">Instructor Contact</NavLink>
        </li>
        <li>
            <NavLink to="/help">Help And Support</NavLink>
        </li>
        
    </ul>
   </nav>
  )
}

export default Navbar
