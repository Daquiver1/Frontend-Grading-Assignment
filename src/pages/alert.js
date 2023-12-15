// MissingGradesAlert.js
import React from 'react';
import '../pages/grade.css'

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
      <ul>
        {missingGradesData.map((data, index) => (
          <li key={index}>
            <span className="course-name">{data.course}</span>
            <span className="alert">{data.alert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissingGradesAlert;
