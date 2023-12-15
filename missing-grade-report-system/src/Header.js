import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/missinggrade" className="nav-link">Missing Grade</Link>
          </li>
          <li className="nav-item">
            <Link to="/gradereport" className="nav-link">Grade Report</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contacts" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to='/signup' className="nav-link sign">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to='/help' className="nav-link">Help</Link>
          </li>
          <li className="nav-item">
            <Link to='/Dashboard' className="nav-link">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};
export default Header;