import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const GradeReportPage = () => {
  // Dummy data, replace with actual data from your backend
  const grades = [
    { semester: 'Spring 2023', course: 'Math', grade: 'A' },
    { semester: 'Spring 2023', course: 'English', grade: 'B' },
    { semester: 'Fall 2022', course: 'Science', grade: 'C' },
  ];

  return (
    <div className="container">
      <Navbar />
      <h2>Grade Report</h2>
      <div>
        <h3>Your Grades</h3>
        {grades.map((item, index) => (
          <div key={index}>
            <p>{item.semester}</p>
            <p>{item.course}: {item.grade}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default GradeReportPage;

