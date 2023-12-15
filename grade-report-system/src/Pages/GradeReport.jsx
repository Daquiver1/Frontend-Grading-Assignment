
import React, { useState } from 'react';
import './GradeReport.css';

const GradeReport = () => {
  const [semester, setSemester] = useState('100-1');

  const courses = {
    '100-1': [
      { course: 'ABSC 211', grade: 'A' },
      { course: 'CSST 223', grade: 'B' },
      { course: 'VTAT 245', grade: 'A' },
      { course: 'ABSC 111', grade: 'B' },
      { course: 'CSST 123', grade: 'A' },
      { course: 'VTAT 145', grade: 'B' },
    ],
    '100-2': [
      { course: 'GHAT 123', grade: 'A' },
      { course: 'GHAV 233', grade: 'B' },
      { course: 'ABSC 211', grade: 'A' },
      { course: 'CSST 223', grade: 'B' },
      { course: 'VTAT 245', grade: 'A' },
      { course: 'ABSC 141', grade: 'B' },
    ],
    '200-1': [
      { course: 'CSST 153', grade: 'A' },
      { course: 'VTAT 135', grade: 'B' },
      { course: 'GHAT 223', grade: 'A' },
      { course: 'GHAV 133', grade: 'B' },
      { course: 'ABSC 211', grade: 'A' },
      { course: 'CSST 223', grade: 'B' },
    ],
    '200-2': [
      { course: 'VTAT 245', grade: 'A' },
      { course: 'ABSC 141', grade: 'B' },
      { course: 'CSST 153', grade: 'A' },
      { course: 'VTAT 135', grade: 'B' },
      { course: 'GHAT 223', grade: 'A' },
      { course: 'GHAV 133', grade: 'B' },
    ],
  };

  return (

    <div>
      <h1>Grade-Report Page</h1>
      
      <label className="gradelabel">
        Select Semester:
        <select value={semester} onChange={e => setSemester(e.target.value)}>
          <option value="100-1">Level 100 - Semester 1</option>
          <option value="100-2">Level 100 - Semester 2</option>
          <option value="200-1">Level 200 - Semester 1</option>
          <option value="200-2">Level 200 - Semester 2</option>
        </select>
      </label>
      
      <h2>{`Level ${semester.split('-')[0]} - Semester ${semester.split('-')[1]}`}</h2>

      <ul className="gradelist">
        {courses[semester].map((course, index) => (
          <li className="list" key={index}>{`${course.course}: ${course.grade}`}</li>
        ))}
      </ul>

     

      <footer className="Footee">
            <p>&copy; Copyright, Grade-Report-System &middot; 2023</p>
            </footer>
    </div>

    
  );
};

export default GradeReport;
