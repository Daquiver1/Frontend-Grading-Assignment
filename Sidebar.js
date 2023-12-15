import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Landing Page
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/grades" className="nav-link">
              Grade Report
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/report" className="nav-link">
              Missing Grade Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Instructor Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link">
              Help and Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
