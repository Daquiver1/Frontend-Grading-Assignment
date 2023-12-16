// GradeList.js
import React from 'react';
import './gradelist.css';

const GradeList = ({ grades }) => {
  return (
    <div className="grade-list-container">
      <h2>Grade Report</h2>
      {grades && grades.length > 0 ? (
        <table className="grade-list">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Grade</th>
              <th>Credit Hours</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.id}>
                <td>{grade.courseName}</td>
                <td>{grade.courseCode}</td>
                <td>{grade.grade}</td>
                <td>{grade.creditHours}</td>
                {/* Add more columns as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Select Semester And Level.</p>
      )}
    </div>
  );
};

export default GradeList;
