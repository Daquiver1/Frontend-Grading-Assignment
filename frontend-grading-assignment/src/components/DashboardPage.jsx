import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'

function DashboardPage() {
 return (
    <div>
      <h1>Dashboard</h1>
      <h2>Current Grades</h2>
      <p>Overview of your current grades</p>
      
      <h2>Missing Grades</h2>
      <p>Any missing grades will be displayed here with an alert or notification.</p>
      
      <nav>
        <ul>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Report Missing Grade</Link></li>
          <li><Link to="/instructor-contact">Instructor Contact</Link></li>
        </ul>
      </nav>
    </div>
 );
}

export default DashboardPage;