import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Footer from './Footer';

const Dashboard = () => {
  const [courses ] = useState([
    { name: 'DCIT201: PROGRAMMING I', grade: 'A' },
    { name: 'DCIT203: DIGITAL AND LOGIC SYSTEMS DESIGN', grade: 'B' },
    { name: 'DCIT205: MULTIMEDIA AND WEB DESIGN', grade: null },
    { name: 'MATH223: CALCULUS II', grade: null },
    { name: 'PHYS205: PRACTICAL PHYSICS III', grade: 'B+' },
    { name: 'PHYS241: ATOMIC PHYSICS AND QUANTUM PHENOMENA', grade: 'A' },
    { name: 'PHYS245: ELECTROMAGNETISM', grade: 'B+' },
    ]);

  useEffect(() => {
    checkMissingGrades();
  }, []);

  const checkMissingGrades = () => {
    const missingGrades = courses.filter((course) => course.grade === null);
    if (missingGrades.length > 0) {
      alert(`You have missing grades in: ${missingGrades.map((course) => course.name).join(', ')}`);
    }
  };

  return (
    <body>
    <div className="grades-container">
      <h2>Your Current Grades</h2>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.grade !== null ? course.grade : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
            <br></br>
      <div class = 'button-container'>  
      <Link to = '/GradeReport'>
        <button>View all grades</button>
      </Link>
      <Link to = '/MissingGradesForm'>
        <button>Report missing grades</button>
      </Link>
      </div>
    </div>
    <Footer position= 'absolute' />
    </body>
  );
};

export default Dashboard;
