import {FaUserCircle } from 'react-icons/fa';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './PageFooter';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  const [grades, setGrades] = useState([
    { courseCode: 'MATH101', courseName: 'Mathematics', grade: 'A', gradePoint: 4.0 },
    { courseCode: 'ENG102', courseName: 'English Literature', grade: 'N/A', gradePoint: 'N/A' },
    { courseCode: 'SCI103', courseName: 'Physics', grade: 'N/A', gradePoint: 'N/A' },
    { courseCode: 'SCI103', courseName: 'Physics', grade: 'F', gradePoint: '0' },
    { courseCode: 'SCI103', courseName: 'Physics', grade: 'F', gradePoint: '0' },

  ]);

  const [missingGrades, setMissingGrades] = useState([
            { courseCode: 'HIS104', courseName: 'History', alert: <Link className='button-report' to="/MissingGradeForm">'Missing grade - Click to report' </Link>},
  ]);

  return (
    <div>
        <Header />  
    <div className='columns'>
      <div className="col-1">
      <FaUserCircle className='profile'/>
      <p>ANTHONY AFFUL BRONI</p>
      <div className='profile-info'>
               <ul>
                <li>
                    <span className='label'>Student ID:</span>
                    <span className='value'>11121058</span>
                </li>
                <li>
                    <span className='label'>Level:</span>
                    <span className='value'>300</span>
                </li>
                <li>
                    <span className='label'>Programme:</span>
                    <span className='value'>BSc Information Technology</span>
                </li>
                <li>
                    <span className='label'>College:</span>
                    <span className='value'>Basic And Applied Sciences</span>
                </li>
                <li>
                    <span className='label'>Sex:</span>
                    <span className='value'>Male</span>
                </li>
               </ul>
               </div>
      </div>

      <div className='col-2'>
        <div className='new-grade'>
        <h2>Year 3</h2>
        <p>Second Semester</p>
        </div>
        
        <p>Overview of Current Grades</p>

        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Grade</th>
              <th>Grade Point</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.courseCode}</td>
                <td>{grade.courseName}</td>
                <td>{grade.grade}</td>
                <td>{grade.gradePoint}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Alerts for Missing Grades</h2>
        {missingGrades.map((alert, index) => (
          <div className='login-button'
            key={index}
            style={{
              background: 'red',
              position: 'relative',
              left: '13%',
              margin: '10px',
              cursor: 'pointer',
              width: '70%',
              color: 'white',
            }}
          >
            {alert.alert}
          </div>
        ))}
      </div>      
    </div>
    <Footer />
    </div>
  );
};

export default Dashboard;
