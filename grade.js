// GradeOverview.js
import React from 'react';


const gradeData = [
  { course: 'Mathematics', grade: 'A' },
  { course: 'Physics', grade: 'B' },
  { course: 'History', grade: 'C' },
  // Add more courses and grades as needed
];

const GradeOverview = () => {
  return (
    <div className="grade-overview">
      <h2>Current Grades Overview</h2>
      <ul>
        {gradeData.map((data, index) => (
          <li key={index}>
            <span className="course-name">{data.course}</span>
            <span className="grade">{data.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradeOverview;
