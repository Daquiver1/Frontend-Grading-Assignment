import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import { Link } from "react-router-dom"

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/missing_grades">Missing Grades</Link></li>
            <li><Link to="/grade_report">Grade Report</Link></li>
            <li><Link to="/contact">Instructor Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
          <div className="start">
            <div className="button">Get To Know More</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header