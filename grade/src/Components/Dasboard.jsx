import React from 'react';
import './Dashboard.css';

const DashboardPage = () => {


 return (
  <div>
  <h1>Welcome to the Missing Grade Reporting System Dashboard</h1>
  <p>Here are some quick links and statistics:</p>
  <ul>
    <li><a href="/MissingGradeForm">Report a Missing Grade</a></li>
    <li><a href="/GradeReport">View My Reports</a></li>
  </ul>
  <div>
    <h2>No missing grades at the moment</h2>
  </div>
</div>
 );
};

export default DashboardPage;