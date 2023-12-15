import React from 'react';
import './GradeReportPage.css'; 
import logo from './images/logo.png';
const GradeReportPage = () => {
  
  const courseData = [
    { course: 'UGRC 210	Academic Writing II', examScore: 85, grade: 'B' },
    { course: 'DCIT 201	Programming I', examScore: 78, grade: 'C' },
    { course: 'DCIT 203	Digital and Logic Systems Design', examScore: 92, grade: 'A' },
    { course: 'DCIT 205	Multi Media and Web Design', examScore: 85, grade: 'B' },
    { course: 'DCIT 207	Computer Architecture & Organisation', examScore: 89, grade: 'B' },
    { course: 'DCIT 209	E-Business Architectures', examScore: 90, grade: 'A' },
  ];

  return (
    <div className="grade-report-page">
      <div className="navigation-links">
        <span>Homepage</span>
        <span>Login</span>
        <span>Dashboard</span>
      </div>
      <div className="report-card">
        <div className="header">
          <div className="school-logo-section">
          <img src={logo}alt="School Logo" />
         </div>
          <div className="student-info">
            <div className="info-section">
              <h3>Student: MAHALIA KATH</h3>
              
            </div>
            <div className="info-section">
              <h3>ID:0234567</h3>
              
            </div>
            <div className="info-section">
              <h3>Course:Computer science</h3>
              
            </div>
            <div className="info-section">
              <h3>Semester:second semeseter</h3>
              
            </div>
          </div>
        </div>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Exam Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((data, index) => (
              <tr key={index}>
                <td>{data.course}</td>
                <td>{data.examScore}</td>
                <td>{data.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="additional-info">
          <div className="grading-scale">
            <h3>Grading Scale</h3>
            <p>A: 90-100</p>
            <p>B: 80-89</p>
            <p>C: 70-79</p>
            <p>D: 69-50</p>
            <p>E: 49-40</p>
            <p>F: 39-</p>
          
          </div>
          <div className="comments">
            <h3>Comments</h3>
            <textarea placeholder="Write your comments here..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeReportPage;