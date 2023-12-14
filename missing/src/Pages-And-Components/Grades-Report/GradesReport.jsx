import React, { useState, useEffect } from 'react';
import Navbar from '../Navigation-Bar/navbar';
import Footer from '../Footer/Footer';
import './GradesReport.css'

const GradesReport = () => {
  const [grades, setGrades] = useState([]);
  const [userData, setUserData] = useState({
    studentName: 'Keziah Nana Arthur',
    programOffering: 'Bsc Information Technology',
    level: '200',
    studentId: '11091047',
    missingGradesCount: 2,
  });

 

  useEffect(() => {
    document.title = 'Grade Report';
  }, []);

  return (
    <div>
      <Navbar />
      <div className='dashboard-container'>
        <h1><u>Grade Report</u></h1>
     
      <label htmlFor="semester">Select Semester:</label>
      <select
        id="semester"
        name="semester"

      >
        <option value="">All</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
      </select>

      <label htmlFor="academicYear">Select Academic Year:</label>
      <select
        id="academicYear"
        name="academicYear"
      >
        <option value="">All</option>
        <option value="2022/2023">2022/2023</option>
      </select>
        <section id='grade-report-section'>
          <div>
            <h3>Academic Year: 2022/2023</h3>
          </div>
        </section>
        <div className='grade-report-div'>
          <h4>All Courses</h4>
          <p>DCIT 101</p>
          <p>DCIT 103</p>
          <p>DCIT 105</p>
          <p>STAT 111</p>
          <p>ECON 101</p>
          <p>UGRC 110</p>
          <p>DCIT 102</p>
          <p>DCIT 104</p>
          <p>ECON 102</p>
          <p>UGRC 150</p>
          <p>MATH 122</p>
          <p>STAT 112</p>
          <table className='grade-report-table' cellSpacing={20}>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grades</th>
            </tr>
            {grades.map((grade, index) => (
              <tr key={index} className={grade.grade === 'N/A' ? 'blinking-red' : ''}>
                <td>{grade.course}</td>
                <td>{grade.courseTitle}</td>
                <td>{grade.grade === 'N/A' ? <span className="missing-grade">N/A</span> : grade.grade}</td>
              </tr>
            ))}
             <h4>Fisrt semester</h4>
             <tr>
              <td>DCIT 101</td>
              <td>Introduction to Computer Science</td>
              <td>C+</td>
            </tr>
            <tr>
              <td>DCIT 103</td>
              <td>Office Productivity Tools</td>
              <td>B</td>
            </tr>
            <tr>
              <td>DCIT 105</td>
              <td>Maths For IT Professionals</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>ECON 101</td>
              <td>Introduction to Economics I</td>
              <td>D</td>
            </tr>
            <tr>
              <td>STAT 111</td>
              <td>Introduction to Statistics I</td>
              <td>D+</td>
            </tr>
            <tr>
              <td>UGRC 110</td>
              <td>Academic Writing I</td>
              <td>N/A</td>
            </tr>
          </table>
          <div>
          <h4>Second semester</h4>
          <table className='grade-report-table'cellSpacing={20}>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grades</th>
            </tr>
            <tr>
              <td>DCIT 102</td>
              <td>Computer Hardware Fundamentals And Circuits</td>
              <td>C</td>
            </tr>
            <tr>
              <td>DCIT 104</td>
              <td>Programming Fundamentals</td>
              <td>A</td>
            </tr>
            <tr>
              <td>ECON 102</td>
              <td>Introduction to Economics II</td>
              <td>B</td>
            </tr>
            <tr>
              <td>MATH 122</td>
              <td>Calculus I</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>STAT 112</td>
              <td>Introduction to Statistics II</td>
              <td>D</td>
            </tr>
            <tr>
              <td>UGRC 150</td>
              <td>Computer Hardware Fundamentals And Circuits</td>
              <td>C</td>
            </tr>
          </table>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GradesReport;

