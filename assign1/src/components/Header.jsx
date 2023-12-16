import React from 'react';
import logo from '../images/cslogo.png'; 

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="University Logo" className="logo" />
        <span className="department-name">DEPARTMENT OF<br></br>COMPUTER SCIENCE</span>
      </div>
      <nav className='flex justify-end'>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>          
          <li><a href="/grade-report">Missing Grade</a></li>
          <li><a href="/instructor-contact">Instractor contact</a></li>
          <li><a href="/helpandsupport">HelpandSupport</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
