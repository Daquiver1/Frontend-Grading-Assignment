
// DashboardPage.js
import React from 'react';
import GradeOverview from './grade';
import MissingGradesAlert from './alert';
import './grade.css'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
            <GradeOverview />
      <MissingGradesAlert />
    </div>
  );
};

export default Dashboard;
