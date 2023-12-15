
// DashboardPage.js
import React from 'react';
import GradeOverview from '..pages/grade';
import MissingGradesAlert from '../pages/alert';
import '..pages/grade.css'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
            <GradeOverview />
      <MissingGradesAlert />
    </div>
  );
};

export default Dashboard;
