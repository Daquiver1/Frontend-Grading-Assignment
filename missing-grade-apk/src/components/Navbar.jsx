import React from 'react'
import './Navbar.css'

const Navbar = () => {
 return (
    <div className="navbar">
      <div className="nav-left">
        <h2>REACT</h2>
      </div>
      <div className="nav-right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/CurrentGrade">Dashboard</a></li>
          <li><a href="/Dashboard">Report</a></li>
          <li><a href="/Report">Missing Grades</a></li>
          <li><a href="/InstructorContactPage">Contacts</a></li>
          <li><a href="/FAQ">FAQs</a></li>
        </ul>
      </div>
    </div>
 )
}

export default Navbar