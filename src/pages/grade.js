// GradeOverview.js
import React from 'react';
import './grade.css'


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
    <section className='section3'>
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
    </section>
  );
};

export default GradeOverview;
