import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DashboardPage = () => {
  // Dummy data, replace with actual data from your backend
  const grades = [
    { course: 'Math', grade: 'A' },
    { course: 'English', grade: 'B' },
    { course: 'Science', grade: 'C' },
  ];

  return (
    <div className="container">
      <Navbar />
      <h2>Dashboard</h2>
      <div>
        <h3>Your Grades</h3>
        <ul>
          {grades.map((item, index) => (
            <li key={index}>
              {item.course}: {item.grade}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;

