import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
  
      <Link to="/LandingPage" className="navbar-brand">Grading System</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/LandingPage" className="nav-link active">LandingPage</Link>
          </li>
          <li className="nav-item">
          <Link to="/Login" className="nav-link active">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/Dashboard" className="nav-link active">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/Grade Report" className="nav-link active">Grade Report</Link>
          </li>
          <li className="nav-item">
            <Link to="/Missing grade form" className="nav-link active">Missing Grade Form</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link active">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/FAQSection" className="nav-link active">Help and Support</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;