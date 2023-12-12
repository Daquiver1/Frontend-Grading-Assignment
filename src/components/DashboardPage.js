import React, { useState, useEffect } from 'react';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  
  const courseData = [
    { course: 'Data Structures & Alogritm', grade: 'A' },
    { course: 'Logic in Computing', grade: 'B' },
    { course: 'Cloud Computing', grade: 'C' },
    { course: 'Object Oriented Programing', grade: 'A' },
    { course: 'System Analysis & Design', grade: 'B' },
    { course: 'Discrete Maths', grade: 'C' },
    { course: 'Linear Algebra', grade: 'A' },
    { course: 'Networking', grade: 'B' },
  ];

  

  const [grades, setGrades] = useState([]);

  useEffect(() => {
    
    setGrades(courseData);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Your Current Grades</h3>
        <ul>
          {grades.map((item, index) => (
            <li key={index}>
              <strong>{item.course}:</strong> {item.grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
