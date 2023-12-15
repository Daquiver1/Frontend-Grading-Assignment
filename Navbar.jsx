import React from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom" 
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
       <nav>
    
    <Link to="/" className='title'>Home</Link>
   
        <ul className='nav-btn'>
        <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/report">Grade-Report</NavLink>
        </li>
        <li>
            <NavLink to="/missing">Missing-Grade</NavLink>
        </li>
        <li>
            <NavLink to="/instructor">Instructor-Contact</NavLink>
        </li>
        <li>
            <NavLink to="/help">Help-And-Support</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
    </ul>
   </nav>
    </div>
  )
}

export default Navbar
