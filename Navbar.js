// Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './images/comScience_logo.png';

function Navbar() {
  return (
    <nav className="main-container p-4">
      <div className="container-navbar mx-auto flex justify-between items-center">
        <img src={logo} alt='School logo' className="logo" />
       
        <div className='Navbar-component'>
          <NavLink to="/" className="nav-link" activeClassName="active">Grade System</NavLink>
          <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
          <NavLink to="/grade-report" className="nav-link" activeClassName="active">Grade Report</NavLink>
          <NavLink to="/missing-grade-form" className="nav-link" activeClassName="active">Report Missing Grade</NavLink>
          <NavLink to="/instructor-contact" className="nav-link" activeClassName="active">Instructor Contact</NavLink>
          <NavLink to="/help-and-support" className="nav-link" activeClassName="active">Help & Support</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
