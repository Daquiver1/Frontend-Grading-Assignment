import React from 'react';
import '../components/styles/dashboard.css';

const AppDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="grades-container">
        <h3>Current Grades</h3>
        {/* Replace with actual data */}
        <p>Math: A</p>
        <p>English: B+</p>
        <p>Science: A-</p>
      </div>
      <div className="alerts-container">
        <h3>Missing Grade Alerts</h3>
        {/* Replace with actual data */}
        <p>History: Assignment 3</p>
      </div>
    </div>
  );
};

export default AppDashboard;