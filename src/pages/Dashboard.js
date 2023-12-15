// DashboardPage.js
import React, { useState, useEffect } from 'react';
import GradeService from '../services/Gradeservice'; // Assuming you have a service for fetching grades
import"../styles/Dashboard.css";// Import your CSS file for styling

const DashboardPage = () => {
  const [grades, setGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);

  useEffect(() => {
    // Fetch grades from the service (GradeService.getGrades() is a placeholder)
    const fetchData = async () => {
      try {
        const studentGrades = await GradeService.getGrades();
        setGrades(studentGrades);

        // Check for missing grades
        const missing = studentGrades.filter(grade => grade.grade === '');
        setMissingGrades(missing);
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* Overview of current grades */}
      <div className="current-grades">
        <h2>Current Grades</h2>
        <ul>
          {grades.map(grade => (
            <li key={grade.id}>
              {grade.course}: {grade.grade || 'N/A'}
            </li>
          ))}
        </ul>
      </div>

      {/* Alerts for missing grades */}
      {missingGrades.length > 0 && (
        <div className="alert-container">
          <h2>Alerts</h2>
          <p>You have missing grades for the following courses:</p>
          <ul>
            {missingGrades.map(missing => (
              <li key={missing.id}>{missing.course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
