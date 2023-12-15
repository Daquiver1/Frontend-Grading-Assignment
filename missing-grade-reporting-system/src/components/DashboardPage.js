import React from 'react';
import './DashboardPage.css';
import logo from './images/logo.png';
import Graph from './Graph'; 
//import Footer from './footer';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <img src={logo} alt="School Logo" className="school-logo" />

        <h2>Welcome, MAHALIA!</h2>
      </div>
      <div className="content">
        <div className="sidebar">
          <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/LoginPage'>Login</a></li>
              <li><a href='/DashboardPage'>Dashboard</a></li>
              <li><a href='/GradeReportPage'>Grade Report</a></li>
              <li><a href='/MissingGradeFormPage'>Missing Grade Form</a></li>
              <li><a href='/InstructorContact'>Instructor contact</a></li>
              <li>< a href='/HelpAndSupport'>Help and Support</a></li>
              <p> Grades Overview For This Semester Courses</p>
              <li>CBAS 210</li>
              <li>DCIT 201</li>
              <li>DCIT 203</li>
              <li>DCIT 205</li>
              <li>DCIT 207</li>
              <li>CCIT 209</li>
            </ul>
          </nav>
        </div>
        <div className="main-content">
          <div className="graph-section">
            <h3>Grades Overview</h3>
            
            <Graph />
          </div>
          <div className="missing-grades-alerts">
            <h3>Missing Grades Alerts</h3>
            <p>No missing grade</p>
          </div>
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  );
};

export default Dashboard;