import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  // Example data (replace this with your actual data)
  const studentInfo = {
    name: 'Oswald Amoah',
    level: '200',
  };

  const currentGrades = [
    { course: 'Dcit 201', grade: 'A' },
    { course: 'Dcit 205', grade: 'B+' },
    { course: 'Maths 223', grade: 'A-' },
    { course: 'Dcit 207', grade: 'B' },
    { course: 'Dcit 203', grade: 'A' },
  ];

  const missingGrades = [
    { course: 'Cbas 210', status: 'Missing' },
    { course: 'Dcit 200', status: 'Missing' },
    { course: 'Dcit233', status: 'Missing' },
  ];

  return (
    <div className="dashboard-container">
    <div className="dropdown">
      <button className="dropdown-button">Menu</button>
      <div className="dropdown-content">
        <Link to="/" className="dropdown-item">Landing</Link>
        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
        <Link to="/grade-report" className="dropdown-item">Grade Report</Link>
        <Link to="/missing-grade-form" className="dropdown-item">Missing Grade Form</Link>
        <Link to="/instructor-contact" className="dropdown-item">Instructor Contact</Link>
        <Link to="/HelpAndSupport" className="dropdown-item">Help and Support</Link>
      </div>
    </div>
    <div className="dashboard-container">
      <h1 className="dashboard-title">Student Dashboard</h1>

      <div className="student-info">
        <p className="student-name">Student: {studentInfo.name}</p>
        <p className="student-level">Level: {studentInfo.level}</p>
      </div>

      <div className="dashboard-section current-grades">
        <h2 className="section-title">Current Grades Overview</h2>
        <ul className="grade-list">
          {currentGrades.map((grade, index) => (
            <li key={index} className="grade-item">
              <span className="grade-course">{grade.course}</span>
              <span className="grade-value">{grade.grade}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section missing-grades">
        <h2 className="section-title">Alerts: Missing Grades</h2>
        <ul className="missing-list">
          {missingGrades.map((grade, index) => (
            <li key={index} className="missing-item">
              <span className="missing-course">{grade.course}</span>
              <span className="missing-status">{grade.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
  }

export default Dashboard;
