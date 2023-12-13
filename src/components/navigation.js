import React from 'react';
import './nav.css'; // Link your CSS file
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="nav-links">
      &nbsp;<Link to="/LoginPage">LoginPage</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/dashboard">Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/grade-report">Grade Report</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/missing-grade-form">Missing Grade Form</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/instructor-contact">Instructor Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/help-and-support">Help and Support</Link>
      </div>
    </nav>
  );
};




export default Navbar;
