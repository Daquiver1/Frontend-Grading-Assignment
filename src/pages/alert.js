// MissingGradesAlert.js
import React from 'react';
import './alert.css'; // import the CSS file

const MissingGradesAlert = () => {
  // Simulated data for missing grades
  const missingGradesData = [
    { course: 'Chemistry', alert: 'Missing grade for assignment' },
    { course: 'English', alert: 'Missing final exam grade' },
    { course: 'Chemistry', alert: 'Missing grade for assignment' },
    { course: 'English', alert: 'Missing final exam grade' },
    { course: 'Chemistry', alert: 'Missing grade for assignment' },
    { course: 'English', alert: 'Missing final exam grade' },
  ];

  return (
    <div className="missing-grades-alert">
      <h2>Missing Grades Alerts</h2>
      <div className="alert-container">
        {missingGradesData.map((data, index) => (
          <div key={index} className="alert-card">
            <div className="alert-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="alert-content">
              <p className="course-name">{data.course}</p>
              <p className="alert">{data.alert}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissingGradesAlert;
