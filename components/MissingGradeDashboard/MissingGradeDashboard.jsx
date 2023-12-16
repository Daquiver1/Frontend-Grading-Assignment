// components/MissingGradeDashboard/MissingGradeDashboard.jsx

import React, { useState } from 'react';
import './MissingGradeDashboard.css';

const MissingGradeDashboard = () => {
  // Sample data for courses and grades
  const [semester1Courses, setSemester1Courses] = useState([
    { name: 'Math 122', grade: 'A' },
    { name: 'Stats 112', grade: 'B' },
    { name: 'Programing 1', grade: 'A' },
    { name: 'Academic writing', grade: 'A' },
    { name: 'Introduction To Computer science', grade: 'B' },
  ]);

  const [semester2Courses, setSemester2Courses] = useState([
    { name: 'Course 1', grade: 'B' },
    { name: 'Course 2', grade: 'A' },
    { name: 'Course 3', grade: 'B' },
    { name: 'Course 4', grade: 'C' },
    { name: 'Course 5', grade: 'A' },
  ]);

  const [semester3Courses, setSemester3Courses] = useState([
    { name: 'Course 1', grade: 'B' },
    { name: 'Course 2', grade: 'A' },
    { name: 'Course 3', grade: 'B' },
    { name: 'Course 4', grade: 'C' },
    { name: 'Course 5', grade: 'A' },
  ]);

  const [semester4Courses, setSemester4Courses] = useState([
    { name: 'Course 1', grade: 'B' },
    { name: 'Course 2', grade: 'A' },
    { name: 'Course 3', grade: 'B' },
    { name: 'Course 4', grade: 'C' },
    { name: 'Course 5', grade: 'A' },
  ]);

  // GPA calculation function
  const calculateGPA = (courses) => {
    const gradePoints = {
      'A': 4.0,
      'B': 3.0,
      'C': 2.0,
      // Add more grades as needed
    };

    const totalCredits = courses.length;
    const totalGradePoints = courses.reduce((total, course) => {
      return total + gradePoints[course.grade];
    }, 0);

    return totalGradePoints / totalCredits;
  };

  const gpaSemester1 = calculateGPA(semester1Courses);
  const gpaSemester2 = calculateGPA(semester2Courses);
  const gpaSemester3 = calculateGPA(semester3Courses);
  const gpaSemester4 = calculateGPA(semester4Courses);


  return (
    <div className="dashboard-container">
      <div className="semester-container">
      <h2>Level 100</h2>
        <h3>First semester</h3>
        <div className="course-list">
          {semester1Courses.map((course, index) => (
            <div key={index} className="course">
              <p>{course.name}</p>
              <p>Grade: {course.grade}</p>
            </div>
          ))}
        </div>
        <p className="gpa">GPA: {gpaSemester1.toFixed(2)}</p>
      </div>

      <div className="semester-container">
        <h3>Second semester</h3>
        <div className="course-list">
          {semester2Courses.map((course, index) => (
            <div key={index} className="course">
              <p>{course.name}</p>
              <p>Grade: {course.grade}</p>
            </div>
          ))}
        </div>
        <p className="gpa">GPA: {gpaSemester2.toFixed(2)}</p>
      </div>

      <div className="semester-container">
        <h2>Level 200</h2>
        <h3>First semester</h3>
        <div className="course-list">
          {semester3Courses.map((course, index) => (
            <div key={index} className="course">
              <p>{course.name}</p>
              <p>Grade: {course.grade}</p>
            </div>
          ))}
        </div>
        <p className="gpa">GPA: {gpaSemester3.toFixed(2)}</p>
      </div>


      <div className="semester-container">
        <h3>Second semester</h3>
        <div className="course-list">
          {semester4Courses.map((course, index) => (
            <div key={index} className="course">
              <p>{course.name}</p>
              <p>Grade: {course.grade}</p>
            </div>
          ))}
        </div>
        <p className="gpa">GPA: {gpaSemester4.toFixed(2)}</p>
      </div>


    </div>

    
  );
};

export default MissingGradeDashboard;
