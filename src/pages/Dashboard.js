
import React from 'react';
import Layout from './Layout';
import './Dashboard.css';





const DashboardPage = () => {
  const grades = [
    
    { courseCode: 'ACA224', courseTitle: 'Academic Literature', grade: 'B+' },
    { courseCode: 'DCIT203', courseTitle: 'Digital Systems', grade: 'C' },
    { courseCode: 'MATH211', courseTitle: 'Mathematics', grade: 'A' },
    { courseCode: 'MATH202', courseTitle: 'Calculus 3', grade: 'B' },
    { courseCode: 'STAT301', courseTitle: 'intro to Statistics', grade: 'A' },
    { courseCode: 'CSC201', courseTitle: 'Computer Science', grade: 'A' },  
    { courseCode: 'DCIT119', courseTitle: 'PRogramming', grade: 'A' },
    { courseCode: 'ACA110', courseTitle: 'Critical Thinking', grade: 'B+' },
  ];

  const missingGrades = [
    { courseCode: 'ECO602', courseTitle: 'Economics', grade: 'Not recorded' },
    { courseCode: 'PHY201', courseTitle: 'Physics', grade: 'Not recorded' },
    { courseCode: 'GEO112', courseTitle: 'Geography', grade: 'Not recorded' },
    { courseCode: 'STAT111', courseTitle: 'Data Analysis', grade: 'Not recorded' },
    { courseCode: 'STAT401', courseTitle: 'Statistics', grade: 'Not recorded' },
    { courseCode: 'PHYSC123', courseTitle: 'Physcology', grade: 'Not recorded' },
    { courseCode: 'DCIT309', courseTitle: 'Programming II', grade: 'Not recorded' },
    { courseCode: 'SOC1001', courseTitle: 'Sociology', grade: 'Not recorded' },
  ];

  return (
    <Layout>
      <div className="dashboard-container">
        <h2> Academic Records</h2>

        <div className="grades-section">
          <h3>Current Grades</h3>
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
