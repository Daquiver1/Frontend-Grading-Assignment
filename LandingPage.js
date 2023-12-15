import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Missing Grade Reporting System</h1>
      <p>
        This system is designed to help students track and report grades that are not recorded in their academic profiles.
      </p>
      <p>
        Use the navigation links below to get started:
      </p>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/grades">Grade Report</Link>
        </li>
        <li>
          <Link to="/report">Missing Grade Form</Link>
        </li>
        <li>
          <Link to="/contact">Instructor Contact</Link>
        </li>
        <li>
          <Link to="/support">Help and Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
