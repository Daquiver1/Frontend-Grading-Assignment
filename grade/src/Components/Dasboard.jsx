import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const DashboardPage = () => {
 const [grades, setGrades] = useState([]);
 const [missingGrades, setMissingGrades] = useState([]);

 useEffect(() => {
    fetchGrades();
 }, []);

 const fetchGrades = async () => {
    const response = await fetch('https://your-api-url/grades');
    const data = await response.json();
    setGrades(data.grades);
    setMissingGrades(data.missingGrades);
 };

 return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="grades-container">
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
      <div className="alerts-container">
        <h2>Alerts</h2>
        <ul>
          {missingGrades.map((missingGrade, index) => (
            <li key={index}>Missing grade for subject: {missingGrade.subject}</li>
          ))}
        </ul>
      </div>
    </div>
 );
};

export default DashboardPage;