import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
    <div className='logo'>
    <Link to='/'>University of Ghana</Link>
        </div>
    <ul className='navbar-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/courselist'>Transcript</Link></li>
        <li><Link to='/reportForm'>Report Form</Link></li>
        <li><Link to='/instructorInfo'>Instructor's Info</Link></li>
        <li><Link to='/help'>Help</Link></li>
        
    </ul>
    </div>
  )
}

export default Navbar;