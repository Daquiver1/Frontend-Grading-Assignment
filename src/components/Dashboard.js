

import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const DashboardPage = () => {
  
  const [grades, setGrades] = useState([
    { subject: 'Math', grade: 90 },
    { subject: 'English', grade: 85 },
    { subject: 'Science', grade: 92 },
   
  ]);

  
  const [missingGrades, setMissingGrades] = useState([
    { subject: 'History' },
 
  ]);

  useEffect(() => {
    
    const fetchData = () => {
      setTimeout(() => {
       
        const updatedGrades = [
          { subject: 'Mathematics', grade: 90 },
          { subject: 'English Language', grade: 85 },
          { subject: 'Logic Circuits', grade: 92 },
          { subject: 'Statistics aand Probability', grade: 88 }, 
          
        ];

        // Sample updated missing grades data
        const updatedMissingGrades = [
          // No missing grades after the update
        ];

        setGrades(updatedGrades);
        setMissingGrades(updatedMissingGrades);
      }, 2000); // Simulating a 2-second delay
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard Page</h1>

      <div className="grades-section">
        <h2>Current Grades</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subject}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grades-section">
        <h2>Current Grades</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subject}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="alerts-section">
        <h2>Alerts/Notifications</h2>
        {missingGrades.length === 0 ? (
          <p>No missing grades. Great job!</p>
        ) : (
          <ul>
            {missingGrades.map((missingGrade, index) => (
              <li key={index}>
                Missing grade for {missingGrade.subject}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
