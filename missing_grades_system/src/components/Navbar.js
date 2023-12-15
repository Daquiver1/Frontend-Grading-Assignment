// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className='home_nav' to="/">Home</Link>
        </li>
        <li>
          <Link className='login_nav' to="/login">Login</Link>
        </li>
        <li>
          <Link className='dashboard_nav' to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link className='gradereport_nav' to="/GradeReport">Grade Report</Link>
        </li>
        <li>
          <Link className='missing_grade_nav' to="/MissingGradeForm">Missing Grade</Link>
        </li>
        <li>
          <Link className='instructorContact_nav' to="/InstructorContact">Instructor Contact</Link>
        </li>
        <li>
          <Link className='helpandsupport_nav' to="/HelpAndSupport">Help and Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
