import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import MainHeader from './MainHeader';
import Footer from './Footer';


const Dashboard = () => {
  // Mock data for enrolled courses (replace with actual data from the server)
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, code: 'DCIT101', name: 'Introduction to Computer Science', grade: 'A', gradePoint: '12' },
    { id: 2, code: 'DCIT103', name: 'Misrosoft Office Productivity Tools', grade: 'A', gradePoint: '12' },
    { id: 3, code: 'DCIT105', name: 'Mathematics For IT Professionals', grade: 'A', gradePoint: '12' },
    { id: 4, code: 'STAT111', name: 'Introduction to Statistics I', grade: 'A', gradePoint: '12' },
    { id: 5, code: 'ECON101', name: 'Introduction to Economics I', grade: 'A', gradePoint: '12' },
    { id: 6, code: 'UGRC110', name: 'Critical Thinking', grade: 'A', gradePoint: '12' },
    { id: 1, code: 'DCIT102', name: 'Introduction to Computer Science', grade: 'A', gradePoint: '12' },
    { id: 2, code: 'DCIT104', name: 'Misrosoft Office Productivity Tools', grade: 'A', gradePoint: '12' },
    { id: 3, code: 'DCIT10', name: 'Mathematics For IT Professionals', grade: 'A', gradePoint: '12' },
    { id: 4, code: 'STAT111', name: 'Introduction to Statistics I', grade: 'A', gradePoint: '12' },
    { id: 5, code: 'ECON101', name: 'Introduction to Economics I', grade: 'A', gradePoint: '12' },
    { id: 6, code: 'UGRC110', name: 'Critical Thinking', grade: 'A', gradePoint: '12' },
    // Add more courses as needed
  ]);

  useEffect(() => {
    // Fetch enrolled courses data from the server here if needed
  }, []);

  return (
    <>
    <MainHeader />

    <div className="dashboard-container">
      <section className="profile-info">
        <h1>Welcome, UG Student!</h1>
        <h2>Your Profile Information:</h2>
        {/* Display user profile information (e.g., name, student ID) */}
      </section>

      <section className="enrolled-courses">
        <h2>First Semester</h2>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Grade</th>
              <th>Grade Point</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.grade}</td>
                <td>{course.gradePoint}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </section>

      <section className="report-missing-grades">
        <h2>Report Missing Grades</h2>
        <p>Utilize the form below to report any instances of missing grades:</p>
        <form>
          {/* Add form fields for reporting missing grades (course selection, assignment details, attachments, etc.) */}
          <label htmlFor="course">Select Course:</label>
          <select id="course" name="course">
            {enrolledCourses.map((course) => (
              <option key={course.id} value={course.code}>
                {course.name}
              </option>
            ))}
          </select>

          {/* Add more form fields based on your requirements */}

          <Link to="/missingreport"><button type="submit">Submit Report</button></Link>
        </form>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default Dashboard;