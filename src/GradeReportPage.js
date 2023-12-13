

import React from 'react';
import './GradeReportPage.css';

const GradeReportPage = () => {

  const specifiedCourses = [
    { name: 'DCIT 201 Programming 1', grade: 'A' },
    { name: 'DCIT 203 Digital and Logic Systems Design', grade: 'B+' },
    { name: 'DCIT 205 Multimedia and Web Design', grade: 'A-' },
    { name: 'DCIT 207 Computer Architecture and Organization', grade: 'B' },
    { name: 'DCIT 209 E-Business Architectures', grade: 'A' },
  ];

  return (
    <div className="grade-report-page">
      <div className="grade-report-container">
        <h2>Grade Report</h2>

        <div className="grade-list">
          {specifiedCourses.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {specifiedCourses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.name}</td>
                    <td>{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradeReportPage;
