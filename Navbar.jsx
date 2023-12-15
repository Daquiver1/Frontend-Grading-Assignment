import React from 'react'
import './Navbar.css'
import UG_logo from '../../assets/UG-logo.png'


const Navbar = () => {
  return (
    <div className="navbar">
        <img src={UG_logo}  alt=''className="logo"/>
        <ul>
            <li>HOME</li>
            <li>DASHBOARD</li>
            <li>GRADE REPORT</li>
            <li>HELP & SUPPORT</li>
        </ul>
        <div className="search-box">
            <input type="text" placeholder="Search"/>
        </div>
        
    </div>
  )
}

export default Navbar