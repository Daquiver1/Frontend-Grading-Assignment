// DashboardPage.js

import React from 'react';
import './style.css'; // Import CSS file for styling

const DashboardPage = () => {
  // Example data for statistics
  const totalStudents = 150;
  const passPercentage = 85;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="statistics">
        <div className="statistic-item">
          <h2>Total Students</h2>
          <p>{totalStudents}</p>
        </div>
        <div className="statistic-item">
          <h2>Pass Percentage</h2>
          <p>{passPercentage}%</p>
        </div>
        {/* Other statistics or charts can be added */}
      </div>

      <div className="actions">
        <button>Generate Report</button>
        {/* Other action buttons or components */}
      </div>
    </div>
  );
};

export default DashboardPage;
