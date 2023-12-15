// GradeOverview.js
import React from 'react';
import './grade.css'; 

const gradeData = [
  { course: 'Mathematics', grade: 'A' },
  { course: 'Physics', grade: 'B' },
  { course: 'History', grade: 'C' },
  { course: 'Mathematics', grade: 'A' },
  { course: 'Physics', grade: 'B' },
  { course: 'History', grade: 'C' },
  { course: 'Mathematics', grade: 'A' },
  { course: 'Physics', grade: 'B' },
  { course: 'History', grade: 'C' },
];

const GradeOverview = () => {
  return (
    <div className="grade-overview">
      <h2>Current Grades Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {gradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.course}</td>
              <td>{data.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeOverview;
