import React from 'react'
import Head from './Head'
import './header.css'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className='flexSB'>
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
        </nav>
      </header>
    </>
  )
}

export default Header