// Dashboard.js

import React, { useState, useEffect } from "react";
import "../Css/DashboardPage.css";
import  SideNavBar from "./SideNavBar";; // Import your CSS file

const DashboardPage = () => {
  const [courses, setCourses] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);
  const [gradeSubmissionStatus, setGradeSubmissionStatus] = useState([]);

  useEffect(() => {
    // Simulated data fetching (replace with actual API calls)
    // For simplicity, I'm using useState for simulated data.

    // Fetch courses
    setCourses([
      { id: 1, name: "Mathematics" },
      { id: 2, name: "English" },
      // Add more courses as needed
    ]);

    // Fetch missing grades
    setMissingGrades([
      { course: "Mathematics", student: "John Doe", assignment: "Quiz 1" },
      { course: "English", student: "Jane Smith", assignment: "Essay 2" },
      // Add more missing grade entries
    ]);

    // Fetch grade submission status
    setGradeSubmissionStatus([
      { course: "Mathematics", status: "Submitted" },
      { course: "English", status: "Pending" },
      // Add more status entries
    ]);
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="content">
      <SideNavBar />
    <div className="dashboard-container">
      <header>
        <h1>Missing Grade Reporting System</h1>
      </header>

      <section className="course-overview">
        <h2>Course Overview</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </section>

      <section className="missing-grades-summary">
        <h2>Missing Grades Summary</h2>
        {missingGrades.map((missingGrade, index) => (
          <div key={index} className="missing-grade-entry">
            <p>
              <strong>Course:</strong> {missingGrade.course}
            </p>
            <p>
              <strong>Student:</strong> {missingGrade.student}
            </p>
            <p>
              <strong>Assignment:</strong> {missingGrade.assignment}
            </p>
          </div>
          
          
        ))}
      </section>

      <section className="grade-submission-status">
        <h2>Grade Submission Status</h2>
        {gradeSubmissionStatus.map((status, index) => (
          <div key={index} className="status-entry">
            <p>
              <strong>Course:</strong> {status.course}
            </p>
            <p>
              <strong>Status:</strong> {status.status}
            </p>
          </div>
          
        ))}
      </section>
    </div>
    </div>

  );
};

export default DashboardPage;
