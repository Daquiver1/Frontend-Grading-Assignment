// components/Dashboard.jsx

import React from 'react';
import NavBar from '../Navbar/NavBar.jsx'; // Adjust the path based on your folder structure
import MissingGradeDashboard from '../MissingGradeDashboard/MissingGradeDashboard';
import UserInfo from '../UserInfo/UserInfo'
import './DashBoard.css';
; // Add this line

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <div className="dashboard-content">
        
        <h1>Your Dashboard</h1>
        {/* Include overview of current grades and alerts for missing grades */}
      </div>
      <MissingGradeDashboard/>
      <NavBar />
      <UserInfo/>
      
    </div>
  );
};

export default Dashboard;
