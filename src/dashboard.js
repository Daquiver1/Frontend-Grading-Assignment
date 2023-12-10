import React, { useState, useEffect } from 'react';

const DashboardPage = () => {
  const [grades, setGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);

  
  useEffect(() => {
    
    const fetchGrades = () => {
      setTimeout(() => {
        
        const fetchedGrades = [
          { subject: 'Math', grade: 85 },
          { subject: 'Science', grade: 92 },
          { subject: 'History', grade: null },
          { subject: 'English', grade: 78 },
        ];
        setGrades(fetchedGrades);

       
        const missing = fetchedGrades.filter(grade => grade.grade === null);
        setMissingGrades(missing);
      }, 1000); 
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