import React, { useState, useEffect } from 'react';
import './DashboardPage.css';

function DashboardPage() {
 const [grades, setGrades] = useState([]);
 const [missingGrades, setMissingGrades] = useState([]);

 useEffect(() => {
    // Replace with your API or database call
    setGrades([
      { subject: 'DCIT 201', grade: 'A' },
      { subject: 'DCIT 205', grade: 'B' },
      { subject: 'DCIT 209', grade: 'B+' },
      { subject: 'CBAS 210', grade: 'Missing' },
      { subject: 'DCIT 203', grade: 'A' },
      { subject: 'DCIT 207', grade: 'B+' },

      // ... Other subjects and grades
    ]);

    setMissingGrades([
      { subject: 'CBAS 210', status: 'Missing' },
      // ... Other missing grades
    ]);
 }, []);

 return (
    <div className="dashboard-page">
      <h1>Student Dashboard</h1>
      <h2>Current Grades</h2>
      <div className="grades">
        {grades.map((grade, index) => (
          <div key={index} className="grade">
            <p>{grade.subject}</p>
            <p>{grade.grade}</p>
          </div>
        ))}
      </div>
      <h2>Missing Grades</h2>
      <div className="missing-grades">
        {missingGrades.map((missing, index) => (
          <div key={index} className="missing">
            <p>{missing.subject}</p>
            <p>{missing.status}</p>
          </div>
        ))}
      </div>
      {/* Other components or notifications for missing grades */}
    </div>
 );
}

export default DashboardPage;