// HelpPage.tsx

import React from 'react';
import './Help.css';

const Help: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="search-box">
      <input type="text" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
      <h1 className="text-center mb-4">Missing Grade System Help</h1>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">How to Use the Missing Grade System</h3>
          <p className="card-text">
            Welcome to the Missing Grade System! Follow these steps to use the system effectively:
          </p>
          <ul>
            <li>Log in to your account using your Student ID and password.</li>
            <li>Navigate to the "Missing Grades" section in the dashboard.</li>
            <li>View the list of missing grades for your courses.</li>
            <li>Click on each missing grade for more details.</li>
            <li>Submit any required documentation or information to resolve missing grades.</li>
          </ul>
          <p className="card-text">
            If you encounter any issues or need further assistance, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
