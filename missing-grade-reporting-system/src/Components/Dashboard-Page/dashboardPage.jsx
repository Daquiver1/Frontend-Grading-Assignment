import React, { useState, useEffect } from 'react';
import UserInfo from '../User-Info/userInfo'; 
import './dashboardPage.css';
import NavBar from '../Nav-Bar/navBar';

const Dashboard = () => {
  const [grades, setGrades] = useState([]); 
  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });

  // Simulated data (you can replace this with actual data)
  const mockGradesData = [
    // ... your mock data
  ];

  useEffect(() => {
    setGrades(mockGradesData);
  }, [mockGradesData]);

  // This useEffect is for calculating missing grades count
  useEffect(() => {
    // Assuming 'N/A' indicates missing grades
    const missingGrades = grades.filter(grade => grade.grade === 'N/A');
    setUserData(prevUserData => ({
      ...prevUserData,
      missingGradesCount: missingGrades.length,
    }));
  }, [grades]);

  // Set document title to "Dashboard"
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <div>
      <NavBar />
      <UserInfo
        studentName={userData.studentName}
        programOffering={userData.programOffering}
        studentId={userData.studentId}
        level={userData.level}
        missingGradesCount={userData.missingGradesCount}
      />

      <div className="dashboard-container">
      <h1><u>Grades Dashboard</u></h1>

      <div>
        <h3>Academic Year: 2022/2023</h3>
      </div>

      <div className='level100-div'>
        <div>
        <h4>Semester 1</h4>
        <table cellSpacing={20}>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grades</th>
          </tr>
          {grades.map((grade, index) => (
            <tr key={index} className={grade.grade === 'N/A' ? 'blinking-red' : ''}>
            <td>{grade.course}</td>
            <td>{grade.courseName}</td>
            <td>{grade.grade}</td>
          </tr>
          ))}
          <tr>
            <td>DCIT 101</td>
            <td>Introduction to Computer Science</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>DCIT 105</td>
            <td>Math For IT Proffessionals</td>
            <td>B+</td>
          </tr>
          <tr>
            <td>DCIT 103</td>
            <td>Office Productivity Tools</td>
            <td>A</td>
          </tr>
          <tr>
            <td>STAT 111</td>
            <td>Introduction to Statistics I</td>
            <td>A</td>
          </tr>
          <tr>
            <td>ECON 101</td>
            <td>Introduction to Economics I</td>
            <td>B</td>
          </tr>
          <tr>
            <td>UGRC 110</td>
            <td>Academic Writing I</td>
            <td>N/A</td>
          </tr>
        </table>
      </div>
      <div>
      <div>
        <h4>Semester 2</h4>
        <table cellSpacing={20}>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grades</th>
          </tr>
          <tr>
            <td>DCIT 102 </td>
            <td>Introduction to Hardware & Circuit</td>
            <td>B</td>
          </tr>
          <tr>
            <td>DCIT 104</td>
            <td>Programming Fundamentals</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>MATH 122</td>
            <td>Calculus I</td>
            <td>B</td>
          </tr>
          <tr>
            <td>STAT 112</td>
            <td>Introduction to Statistics II</td>
            <td>A</td>
          </tr>
          <tr>
            <td>ECON 102</td>
            <td>Introduction to Economics II</td>
            <td>A</td>
          </tr>
          <tr>
            <td>UGRC 150</td>
            <td>Critical Thinking & Practical Reasoning</td>
            <td>A</td>
          </tr>
        </table>
      </div>
      </div>
      </div>

      <div>
        <h3>Academic Year: 2023/2024</h3>
      </div>

      <div className='level200-div'>
        <div>
        <h4>Semester 1</h4>
        <table cellSpacing={20}>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grades</th>
          </tr>
          <tr>
            <td>DCIT 201</td>
            <td>Programming I</td>
            <td>A</td>
          </tr>
          <tr>
            <td>DCIT 203</td>
            <td>Digital & Logic Systems Design</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>DCIT 205</td>
            <td>Multimedia & Web Design</td>
            <td>A</td>
          </tr>
          <tr>
            <td>DCIT 207</td>
            <td>Computer Organization & Architecture</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>DCIT 209</td>
            <td>E-Business Architectures</td>
            <td>A</td>
          </tr>
          <tr>
            <td>CBAS 210</td>
            <td>Academic Writing II</td>
            <td>B+</td>
          </tr>
        </table>
      </div>

      <div>
      <div>
        <h4>Semester 2</h4>
        <table cellSpacing={20}>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grades</th>
          </tr>
          <tr>
            <td>DCIT 202</td>
            <td>Mobile Application Development</td>
            <td>Exam N/A</td>
          </tr>
          <tr>
            <td>DCIT 204 </td>
            <td>Data Structures & Algorithms</td>
            <td>Exam N/A</td>
          </tr>
          <tr>
            <td>DCIT 206</td>
            <td>Systems Administration</td>
            <td>Exam N/A</td>
          </tr>
          <tr>
            <td>DCIT 208</td>
            <td>Software Engineering</td>
            <td>Exam N/A</td>
          </tr>
          <tr>
            <td>DCIT 214</td>
            <td>Information Modelling & Specification</td>
            <td>Exam N/A</td>
          </tr>
          <tr>
            <td>UGRC 220</td>
            <td>Introduction to African Studies</td>
            <td>Exam N/A</td>
          </tr>
        </table>
      </div>
      </div>
      </div>
      </div>
    </div>
      

  );
};

export default Dashboard;