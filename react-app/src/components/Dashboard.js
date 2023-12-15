
import React, { useState, useEffect } from 'react';
import "./Dashborad.css"; // Import your CSS file

import { Link } from "react-router-dom"; 

const Dashboard = () => {
  // Mock data for enrolled courses (replace with actual data from the server)
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, code: 'CSCI101', name: 'INTRODUCTION TO COMPUTER SCIENCE', grade: 'A' },
    { id: 1, code: 'CSCI101', name: 'OFFICE PRODUCTIVITY TOOLS', grade: 'B' },
    { id: 1, code: 'CSCI101', name: 'COMPUTER HARDWARE FUNDAMENTALS', grade: 'B' },
    { id: 1, code: 'CSCI101', name: 'PROGRAMMING FUNDAMENTALS', grade: 'C' },
    { id: 1, code: 'CSCI101', name: 'DIGITAL AND LOGIC SYSTEMS DESIGN', grade: 'A' },
    { id: 1, code: 'CSCI101', name: 'ACADEMIC WRITING', grade: 'N/A' },
    // Add more courses as needed
  ]);

  useEffect(() => {
    // Fetch enrolled courses data from the server here if needed
  }, []);

  return (
    <div className="dashboard-container">
      <section className="profile-info">
        <h1>Welcome, UG STUDENT!</h1>
        <p className='profile-info'>Your Profile Information:</p>
        {/* Display user profile information (e.g., name, student ID) */}
      </section>

      <section className="enrolled-courses">
        <h2 className='course'>Enrolled Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="report-missing-grades">
        <h2 className='repo'>Report Missing Grades</h2>
        <p className='repo1'>Use the form below to report any missing grades:</p>
        <form>
        
          <label className='sele' htmlFor="course">Select Course:</label>
          <select id="course" name="course">
            {enrolledCourses.map((course) => (
              <option key={course.id} value={course.code}>
                {course.name}
              </option>
            ))}
          </select>

          
        <Link to="/MissingGrade">
            {""} 
          <button type="submit">Submit Report</button>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
