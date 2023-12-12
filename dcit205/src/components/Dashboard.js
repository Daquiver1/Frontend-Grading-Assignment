import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import Navbar from './Navbar';

const coursesData = [
    { code: 'DCIT101', name: 'INTRODUCTION TO COMPUTER SCIENCE', grade: 'A' },
    { code: 'DCIT103', name: 'OFFICE PRODUCTIVITY TOOLS', grade: 'B' },
    { code: 'ECONS101', name: 'INTRODUCTION TO ECONOMICS I', grade: 'A' },
    { code: 'MATH123', name: 'VECTORS AND GEOMETRY', grade: 'A' },
    { code: 'STAT111', name: 'INTRODUCTION TO STATISTICS AND PROBABILITY I', grade: 'A' },
    { code: 'UGRC110', name: 'ACADEMIC WRITING I', grade: 'B' },
    { code: 'DCIT102', name: 'COMPUTER HARDWARE FUNDAMENTALS', grade: 'B' },
    { code: 'DCIT104', name: 'PROGRAMMING FUNDAMENTALS', grade: 'D' },
    { code: 'ECONS102', name: 'INTRODUCTION TO ECONOMICS II', grade: 'A' },
    { code: 'MATH122', name: 'CALCULUS I', grade: 'D+' },
    { code: 'MATH126', name: 'ALGEBRA AND GEOMETRY', grade: 'A' },
    { code: 'STAT112', name: 'INTRODUCTION TO STATISTICS AND PROBABILITY II', grade: 'A' },
    { code: 'UGRC150', name: 'CRITICAL THINKING AND PRACTICAL REASONING', grade: 'A' },

];

const Dashboard = () => {

    const [missingGrades, setMissingGrades] = useState([]);

    useEffect(() => {
    fetchMissingGrades().then((missingGradesData) => {
      setMissingGrades(missingGradesData);
    });
    }, []);

    const fetchMissingGrades = () => {
        
        return new Promise((resolve) => {
            setTimeout(() => {
            const missingGradesData = [
                { code: 'MATH121', name: 'Algebra and Trigonometry' },
                { code: 'CBAS210', name: 'ACADEMIC WRITING II' },
                { code: 'DCIT201', name: 'PROGRAMMING I' },
                { code: 'DCIT205', name: 'MULTI MEDIA AND WEB DESIGN' },
                { code: 'MATH223', name: 'CALCULUS II'},
                { code: 'STAT230', name: 'DATA MINING'}
            ];
            resolve(missingGradesData);
            }, 1000);
        });
    };

    const handleAlertClick = (courseCode) => {
        alert(`You have a missing grade for course ${courseCode}`);
    };


  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="dashboard-container">
      <h2>Dashboard</h2>

      {missingGrades.length > 0 && (
        <div className="missing-grades-alert">
          <strong>Alert:</strong> You have missing grades.
          {missingGrades.map((course) => (
            <button className='dash-btn' key={course.code} onClick={() => handleAlertClick(course.code)}>
              {course.name}
            </button>
          ))}
        </div>
      )}

      <div className="current-grades">
        <h3>Current Grades</h3>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((course) => (
              <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <footer>
        <p>&copy; 2023 Our Website. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Dashboard
