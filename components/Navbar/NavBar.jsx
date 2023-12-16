// components/NavBar.jsx

import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import icon from '../Accutrument/dashBoard log.png'

const NavBar = () => {
  return (
    <nav className="navbar">
     <ul className='nav-left'>
        <li><img src={icon} alt="" className='dashboardLogo' /></li>
        <li className='li-border'><Link to= "/HomePage">Home</Link></li>
        <li className='li-border'><Link to="/dashboard">Dashboard</Link></li>
        <li className='li-border'><Link to="/grades-report">Grades Report</Link></li>
        <li className='li-border'><Link to="/grade-form">Grade Form</Link></li>
      </ul>
      <ul className='nav-right'>
        <li className='li-border'><Link to="/help-support">Help & Support</Link></li>
        <li className='li-border'><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
