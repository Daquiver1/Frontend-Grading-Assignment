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
            <a href="/home.js" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about.js" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/services.js" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact.js" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="/signup.js" className="nav-link sign">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};
export default Header;