import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={require("./comScience_logo.png")} alt="Logo" className="logo-img"/>
        <span className="logo-text">MySite</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="./home.js" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="./missinggrade.js" className="nav-link">Missing Grade</a>
          </li>
          <li className="nav-item">
            <a href="./gradereport.js" className="nav-link">Grade Report</a>
          </li>
          <li className="nav-item">
            <a href="./Contacts.js" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href='./signup.js' className="nav-link sign">Sign In</a>
          </li>
          <li className="nav-item">
            <a href='./help.js' className="nav-link">Help</a>
          </li>
          <li className="nav-item">
            <a href='./Dashboard.js' className="nav-link">Dashboard</a>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};
export default Header;