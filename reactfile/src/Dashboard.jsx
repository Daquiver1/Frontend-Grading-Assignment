import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './Dashboard.css'; 
import Footer from './Footer';

const Dashboard = () => {
  
  const studentProfile = {
    name: 'Ariel Patterson',
    grade: 'Level 100',
    email: 'Ari44@gmail.com',
    image: '/Ariel.webp', 
  };

  
  const firstSemesterGrades = [
    { subject: 'DCIT 103', grade: 'A' },
    { subject: 'DCIT 102', grade: 'B' },
    { subject: 'ECONS 101', grade: 'B+' },
  ];

  const secondSemesterGrades = [
    { subject: 'DCIT 105', grade: 'B' },
    { subject: 'STAT 112', grade: 'A' },
    { subject: 'UGRC150', grade: 'B' },
   
  ];

  const missingGrades = [
    { subject: 'DCIT 104' },
    
  ];

 
  const [studentData, setStudentData] = useState(studentProfile);

  useEffect(() => {
  
  }, []);

  return (

    <>
    <NavBar/>
    <div 
    style={{
      backgroundImage: 'url("/ash1.jpg")',
    }}className="dashboard-container">
     
      <div className="profile-container">
        <h2 className='Profile-item'>Student Profile</h2>
        <img className='image-item' src={studentData.image} alt="Student Profile" />
        <p className='detail'>Name: {studentData.name}</p>
        <p className='detail'>Grade: {studentData.grade}</p>
        <p className='detail'>Email: {studentData.email}</p>
      </div>

    
      <div className="grades-container">
        <h2 className='Semester'>First Semester Grades</h2>
        <div className="grades-box">
          <table className='table-item'>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {firstSemesterGrades.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grades-container">
        <h2 className='Semester'>Second Semester Grades</h2>
        <div className="grades-box">
          <table className='table-item'>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {secondSemesterGrades.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>

        <div className="alerts-container">
        <h2 className='alert-item'>Alerts</h2>
        <div className="alerts-box">
          {missingGrades.length === 0 ? (
            <p>No missing grades.</p>
          ) : (
            <ul>
              {missingGrades.map((item, index) => (
                <li  className ="Missing"key={index}>{`${item.subject} - Missing Grade`}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      </div>

      

    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;