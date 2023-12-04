import React from 'react';
import './GradeReport.css';

const GradeReport = () => {
  // Assuming you have some data to display for the grade report
  const gradeData = [
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B' },
    { subject: 'History', grade: 'A-' },
    // Add more data as needed
  ];

  return (
    <div className="grade-report-container">
      <h1>Grade Report</h1>
      <table className="grade-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {gradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.subject}</td>
              <td>{data.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReport;
