// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Missing Grade Reporting System</h1>
        <p>Welcome to the system designed to help you track and report missing grades.</p>
      </header>
      
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Report Missing Grade</Link></li>
          <li><Link to="/instructor-contact">Instructor Contact</Link></li>
          <li><Link to="/help-and-support">Help and Support</Link></li>
        </ul>
      </nav>

      <footer>
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default LandingPage;
