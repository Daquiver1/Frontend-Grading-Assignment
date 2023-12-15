/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './dashboard.css'
import { Link } from 'react-router-dom';


const coursesData = [
    { code: 'DCIT101', name: 'INTRODUCTION TO COMPUTER SCIENCE', grade: 'B' },
    { code: 'DCIT103', name: 'OFFICE PRODUCTIVITY TOOLS', grade: 'A' },
    { code: 'DCIT104', name: 'PROGRAMMING FUNDAMENTALS', grade: 'D' },
    { code: 'ECONS102', name: 'INTRODUCTION TO ECONOMICS II', grade: 'C+' },
    { code: 'MATH122', name: 'CALCULUS I', grade: 'D+' },
    { code: 'MATH126', name: 'ALGEBRA AND GEOMETRY', grade: 'B' },
    { code: 'STAT112', name: 'INTRODUCTION TO STATISTICS AND PROBABILITY II', grade: 'B' },
    { code: 'UGRC150', name: 'CRITICAL THINKING AND PRACTICAL REASONING', grade: 'C' },
    { code: 'ECONS101', name: 'INTRODUCTION TO ECONOMICS I', grade: 'C+' },
    { code: 'MATH123', name: 'VECTORS AND GEOMETRY', grade: 'A' },
    { code: 'STAT111', name: 'INTRODUCTION TO STATISTICS AND PROBABILITY I', grade: 'B+' },
    { code: 'UGRC110', name: 'ACADEMIC WRITING I', grade: 'B' },
    { code: 'DCIT102', name: 'COMPUTER HARDWARE FUNDAMENTALS', grade: 'B' },
    

];

const dashboard = () => {

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
                { code: 'DCIT 201', name: 'PROGRAMMING 1' },
                { code: 'CBAS210', name: 'ACADEMIC WRITING II' },
                { code: 'DCIT209', name: 'E-BUSSINESS AND COMMERCE' },
                { code: 'DCIT205', name: 'MULTI MEDIA AND WEB DESIGN' },
                { code: 'DCIT207', name: 'COMPUTER ORGANIZATION AND ARCHITECTURE'},
                { code: 'DCIT 203', name: 'DIGITAL ELECTRONICS'}
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
      <nav>
        <Link to="/dashboard">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Terms & Conditions</Link>
      </nav>
      <p>&copy; 2023 University Of Ghana. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default dashboard;
