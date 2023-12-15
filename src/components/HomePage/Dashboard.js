// Dashboard.js

import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from '../navigation';
import Footer from './Footer';
const Dashboard = () => {
  const [level100Semester1, setLevel100Semester1] = useState({
    course1: 'Course 1',
    course2: 'Course 2',
    course3: 'Course 3',
    course4: 'Course 4',
    course5: 'Course 5',
    // Add other relevant information like grades for each course
  });

  const [level100Semester2, setLevel100Semester2] = useState({
    course1: 'Course 1',
    course2: 'Course 2',
    course3: 'Course 3',
    course4: 'Course 4',
    course5: 'Course 5',
    // Add other relevant information like grades for each course
  });

  const [level200Semester1, setLevel200Semester1] = useState({
    course1: 'Course 1',
    course2: 'Course 2',
    course3: 'Course 3',
    course4: 'Course 4',
    course5: 'Course 5',
    // Add other relevant information like grades for each course
  });

  const [level200Semester2, setLevel200Semester2] = useState({
    course1: 'Course 1',
    course2: 'Course 2',
    course3: 'Course 3',
    course4: 'Course 4',
    course5: 'Course 5',
    // Add other relevant information like grades for each course
  });

  // Function to calculate GPA
  const calculateGPA = (semester) => {
    // Add your GPA calculation logic here based on grades for each course
    // This is a placeholder, you'll need to replace it with your calculation
    const totalPoints = Object.values(semester).reduce((acc, grade) => acc + grade, 0);
    const gpa = totalPoints / Object.keys(semester).length;
    return gpa.toFixed(2); // Adjust decimal places as needed
  };

  return (
    <div>
        <Navbar/>
    <div className="dashboard">
      <nav className="navbar">Your Navbar Content Goes Here</nav>
      
      <div className="dashboard-content">
        <h1>Academic Results</h1>

        <div className="semester-results">
          <h2>Level 100 - Semester 1</h2>
          {/* Display course information for level 100, semester 1 */}
          {/* Add your JSX code here */}
          <p>GPA: {calculateGPA(level100Semester1)}</p>
        </div>

        <div className="semester-results">
          <h2>Level 100 - Semester 2</h2>
          {/* Display course information for level 100, semester 2 */}
          {/* Add your JSX code here */}
          <p>GPA: {calculateGPA(level100Semester2)}</p>
        </div>

        <div className="semester-results">
          <h2>Level 200 - Semester 1</h2>
          {/* Display course information for level 200, semester 1 */}
          {/* Add your JSX code here */}
          <p>GPA: {calculateGPA(level200Semester1)}</p>
        </div>

        <div className="semester-results">
          <h2>Level 200 - Semester 2</h2>
          {/* Display course information for level 200, semester 2 */}
          {/* Add your JSX code here */}
          <p>GPA: {calculateGPA(level200Semester2)}</p>
        </div>
      </div>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default Dashboard;
