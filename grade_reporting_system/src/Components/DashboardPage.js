import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/DashboardPage.css';
import UniversalComponent from './UniversalComponent';

const DashboardPage = () => {
  const currentCourses = [
    { name: 'DCIT 201', grade: 'A' },
    { name: 'DCIT 205', grade: 'C-' },
    { name: 'MATH 223', grade: 'A' },
    { name: 'DCIT 202', grade: 'A' },
    { name: 'DCIT 203', grade: 'C-' },
    { name: 'MATH 225', grade: 'A' },
  ];

  return (
    <UniversalComponent>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1>Welcome back, [Username]!</h1>
          <div className="dashboard-overview">
            <h2>Overview</h2>
            <div className="current-courses">
              <h3>Current Courses and Grades</h3>
              <ul>
                {currentCourses.map((course, index) => (
                  <li key={index}>
                    <strong>{course.name}:</strong> {course.grade}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="dashboard-quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/grade-report">Grade Report</Link>
              </li>
              <li>
                <Link to="/missing-grade-form">Missing Grade Form</Link>
              </li>
            </ul>
          </div>
          <div className="dashboard-notifications">
            <h2>Notifications</h2>
            <div className="missing-grades-alert">
              <h4>Subject: Important Notice-Missing Grade Alert!</h4>
              <p>
                This is to inform you that a grade for {`Biology`} is currently missing from your academic records.
                 Please log in to your student portal to review and address this matter promptly.
                 For any assistance, reach out to your instructor or use the provided 'Missing Grade Form' on our website.
              </p>
            </div>
            <div className="new-grades-messages">
            </div>
          </div>
          <div className="dashboard-announcements">
            <h2>Announcements</h2>
          </div>
          <div className="dashboard-search">
            <h2>Search Courses</h2>
          </div>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default DashboardPage;
