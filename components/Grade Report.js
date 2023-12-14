// GradeReport.js
import React from 'react';

const GradeReport = ({ studentName, grades }) => {
  // Check if grades is undefined or null before attempting to map over it
  if (!grades) {
    return <p>No grades available for {studentName}.</p>;
  }

  return (
    <div>
      <h2>Grade Report for {studentName}</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.subject}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReport;
