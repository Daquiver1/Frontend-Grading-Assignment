import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/DashboardPage.css'; // Import the corresponding CSS styles
import UniversalComponent from './UniversalComponent';

const DashboardPage = () => {
  // Sample data for current courses and grades
  const currentCourses = [
    { name: 'Course 1', grade: 'A' },
    { name: 'Course 2', grade: 'B' },
    { name: 'Course 3', grade: 'A-' },
    // Add more courses as needed
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
            {/* Add components or content for displaying other overviews */}
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
              {/* Add more quick links based on your requirements */}
            </ul>
          </div>
          <div className="dashboard-notifications">
            <h2>Notifications</h2>
            <div className="missing-grades-alert">
              {/* Add components or content for missing grades alert */}
              <h4>Subject: Important Notice-Missing Grade Alert!</h4>
              <p>
                This is to inform you that a grade for {`Biology`} is currently missing from your academic records.
                 Please log in to your student portal to review and address this matter promptly.
                 For any assistance, reach out to your instructor or use the provided 'Missing Grade Form' on our website.
              </p>
            </div>
            <div className="new-grades-messages">
              {/* Add components or content for new grades or messages */}
            </div>
          </div>
          <div className="dashboard-announcements">
            <h2>Announcements</h2>
            {/* Add components or content for recent announcements or updates */}
          </div>
          <div className="dashboard-search">
            <h2>Search Courses</h2>
            {/* Add components or content for search or filter option for courses */}
          </div>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default DashboardPage;
