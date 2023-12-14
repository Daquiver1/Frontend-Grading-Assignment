import React from 'react'
import './Navbar.css'

const Navbar = () => {
 return (
    <div className="navbar">
      <div className="nav-left">
        <h2>Your Company</h2>
      </div>
      <div className="nav-right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
 )
}

export default Navbar