import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Missing Grade Reporting System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/GradeReport">
                  Grade Report
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/MissingGradeForm">
                  Missing Grade Form
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/InstructorContact">
                Instructor Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/HelpAndSupport">
                  Help And Support
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>



      
    </div>
  );
};

export default Navigation;
