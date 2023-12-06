import React, { useState, useEffect } from 'react';

const DashboardPage = () => {
  const [grades, setGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);

  // Simulated API call to fetch grades data
  useEffect(() => {
    // Replace this with your actual API call to fetch grades
    // For demonstration, using setTimeout to mimic API call m
    const fetchGrades = () => {
      setTimeout(() => {
        // Simulated fetched grades data
        const fetchedGrades = [
          { subject: 'Math', grade: 85 },
          { subject: 'Science', grade: 92 },
          { subject: 'History', grade: null }, // Simulating a missing grade
          { subject: 'English', grade: 78 },
        ];
        setGrades(fetchedGrades);

        // Find missing grades
        const missing = fetchedGrades.filter(grade => grade.grade === null);
        setMissingGrades(missing);
      }, 1000); // Simulated delay of 1 second
    };

    fetchGrades();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Current Grades:</h3>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {grade.subject}: {grade.grade !== null ? `${grade.grade}%` : 'N/A'}
          </li>
        ))}
      </ul>
      {missingGrades.length > 0 && (
        <div>
          <h3>Alerts: Missing Grades</h3>
          <ul>
            {missingGrades.map((missing, index) => (
              <li key={index}>{missing.subject}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;