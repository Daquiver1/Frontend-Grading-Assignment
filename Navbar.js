import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Grade System</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/grades">Grade Report</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/report">Report Missing Grade</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Instructors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support">Help & Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
