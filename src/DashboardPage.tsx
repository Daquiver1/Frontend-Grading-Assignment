import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css'
import 'bootstrap/dist/css/bootstrap.css'


const DashboardPage: React.FC = () => {
  // data for grades
  const grades = [
    { course: 'Calculus', grade: 'A' },
    { course: 'Java', grade: 'B+' },
    { course: 'Networking', grade: 'A-' },
    
  ];

  // data for missing grades
  const missingGrades = ['Probability', 'Assembly Language'];

  return (
    <div className="dashboard-page">
      <h2 className="page-title">Dashboard</h2>
      <p>Welcome, [Student Name]. Here's an overview of your current grades:</p>
      <div className="grades-list">
        {grades.map((course, index) => (
          <div key={index} className="grade-item">
            <span className="course-name">{course.course}: </span>
            <span className="course-grade">{course.grade}</span>
          </div>
        ))}
      </div>
      {missingGrades.length > 0 && (
        <div className="missing-grades-alert">
          <h3>Missing Grades</h3>
          <ul>
            {missingGrades.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <p>Please <Link to="/report-missing-grade">report</Link> any missing grades.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;