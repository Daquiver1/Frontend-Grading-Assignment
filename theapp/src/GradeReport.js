import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from './Footer';

const GradeReport = () => {
  // Mock data for courses and grades
  const courses = [
    { id: 1, name: 'Mathematics', grade: 'A', semester: 'Spring 2023' },
    { id: 2, name: 'Science', grade: 'B+', semester: 'Spring 2023' },
    { id: 3, name: 'Geography', grade: 'A', semester: 'Fall 2022' },
    { id: 3, name: 'History', grade: 'A', semester: 'Fall 2022' },
    { id: 3, name: 'Physics', grade: 'C+', semester: 'Fall 2022' },
    { id: 3, name: 'Chemistry', grade: 'B', semester: 'Fall 2022' },
    { id: 3, name: 'Maths', grade: 'A', semester: 'Fall 2022' },

   
    // Add more courses with respective grades and semesters
  ];

  // Getting unique semesters for filtering
  const uniqueSemesters = Array.from(new Set(courses.map(course => course.semester)));

  const [selectedSemester, setSelectedSemester] = useState('All'); // Default: All semesters

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  // Filtering courses by selected semester
  const filteredCourses = selectedSemester === 'All' ? courses : courses.filter(course => course.semester === selectedSemester);

  return (
    <div>
        <Navigation />
        
    <div className="container mt-4">
      <h1>Grade Report</h1>

      {/* Semester Filter */}
      <div className="mb-3">
        <label htmlFor="semesterFilter" className="form-label">Filter by Semester:</label>
        <select
          className="form-select"
          id="semesterFilter"
          value={selectedSemester}
          onChange={handleSemesterChange}
        >
          <option value="All">All</option>
          {uniqueSemesters.map((semester, index) => (
            <option key={index} value={semester}>{semester}</option>
          ))}
        </select>
      </div>

      {/* Display Courses and Grades */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Grade</th>
            <th scope="col">Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.grade}</td>
              <td>{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
    </div>
  );
};

export default GradeReport;
