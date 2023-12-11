// components/Dashboard.jsx

import React from 'react';
import NavBar from '../Navbar/NavBar'; // Adjust the path based on your folder structure
import './DashBoard.css';
import UserInfo from '../UserInfo/UserInfo';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavBar />
      <div className="dashboard-content">
        {/* Add content for the Dashboard */}
        <h1>Your Dashboard</h1>
        {/* Include overview of current grades and alerts for missing grades */}
      </div>
    </div>
  );
};

export default Dashboard;
