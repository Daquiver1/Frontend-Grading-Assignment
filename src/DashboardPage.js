

import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
 
  const specifiedCourses = [
    'DCIT 201 Programming 1',
    'DCIT 203 Digital and Logic Systems Design',
    'DCIT 205 Multimedia and Web Design',
    'DCIT 207 Computer Architecture and Organization',
    'DCIT 209 E-Business Architectures',
  ];

 
  const currentCourses = [
    { name: 'DCIT 201', grade: 'A' },
    { name: 'DCIT 203', grade: 'B' },
    { name: 'DCIT 205', grade: 'A-' },
    { name: 'DCIT 207', grade: 'A-' },
    { name: 'DCIT 209', grade: 'A-' },
    
    ...specifiedCourses.map(course => ({ name: course, grade: '' })), 
  ];

  const missingGrades = currentCourses.filter(course => !course.grade);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h2>Dashboard</h2>

        <div className="grades-overview">
          <h3>Overview of Current Grades</h3>
          {currentCourses.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {currentCourses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.name}</td>
                    <td>{course.grade || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No courses available.</p>
          )}
        </div>

        {missingGrades.length > 0 && (
          <div className="missing-grades-alert">
            <h3>Alerts: Missing Grades</h3>
            <ul>
              {missingGrades.map((course, index) => (
                <li key={index}>{course.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Add visual representation of overall academic performance if needed */}

        <div className="navigation-links">
          <Link to="/grade-report">Grade Report</Link>
          <Link to="/missing-grade-form">Report Missing Grade</Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
