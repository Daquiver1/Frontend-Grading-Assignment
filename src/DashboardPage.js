// src/DashboardPage.js
import React from 'react';
import Layout from './Layout';
import './Dashboard.css';





const DashboardPage = () => {
  const grades = [
    { courseCode: 'MATH101', courseTitle: 'Mathematics', grade: 'A' },
    { courseCode: 'ENG102', courseTitle: 'English Literature', grade: 'B' },
    { courseCode: 'PHY103', courseTitle: 'Physics', grade: 'C' },
    { courseCode: 'CSC201', courseTitle: 'Computer Science', grade: 'A+' },
    { courseCode: 'HIS202', courseTitle: 'History', grade: 'B-' },
    { courseCode: 'CHEM301', courseTitle: 'Chemistry', grade: 'A' },
    { courseCode: 'PSY302', courseTitle: 'Psychology', grade: 'B+' },
    { courseCode: 'ART401', courseTitle: 'Art', grade: 'A-' },
  ];

  const missingGrades = [
    { courseCode: 'BIO501', courseTitle: 'Biology', grade: 'Not recorded' },
    { courseCode: 'GEO502', courseTitle: 'Geography', grade: 'Not recorded' },
    { courseCode: 'FRE601', courseTitle: 'French', grade: 'Not recorded' },
    { courseCode: 'ECO602', courseTitle: 'Economics', grade: 'Not recorded' },
    { courseCode: 'PED701', courseTitle: 'Physical Education', grade: 'Not recorded' },
    { courseCode: 'MUS802', courseTitle: 'Music', grade: 'Not recorded' },
    { courseCode: 'STAT901', courseTitle: 'Statistics', grade: 'Not recorded' },
    { courseCode: 'SOC1001', courseTitle: 'Sociology', grade: 'Not recorded' },
  ];

  return (
    <Layout>
      <div className="dashboard-container">
        <h2>Your Academic Dashboard</h2>

        <div className="grades-section">
          <h3>Your Grades at a Glance</h3>
          <table className="grades-table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td>{grade.courseCode}</td>
                  <td>{grade.courseTitle}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="missing-grades-section">
          <h3>Missing Grades Alerts</h3>
          {missingGrades.length > 0 ? (
            <table className="missing-grades-table">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {missingGrades.map((missingGrade, index) => (
                  <tr key={index}>
                    <td>{missingGrade.courseCode}</td>
                    <td>{missingGrade.courseTitle}</td>
                    <td>{missingGrade.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No missing grades at the moment. Keep up the good work!</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
