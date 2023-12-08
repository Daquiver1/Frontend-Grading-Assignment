import React, { useState, useEffect } from 'react';
import './GradeReport.css';

const GradeReportPage = () => {
  // Sample data for courses and grades
  const [courses, setCourses] = useState([
    { name: 'Introduction to Computer Science A', grade: 'A', semester: 'Fall 2023' },
    { name: 'Mathematics', grade: 'B', semester: 'Fall 2023' },
    { name: 'History', grade: 'A-', semester: 'Spring 2023' },
    { name: 'Literature', grade: 'B+', semester: 'Spring 2023' },
    // Add more course data as needed
  ]);

  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    // Extract unique semesters from courses
    const uniqueSemesters = [...new Set(courses.map((course) => course.semester))];
    setSemesters(uniqueSemesters);
  }, [courses]);

  // Function to handle filtering by semester
  const handleFilterBySemester = (selectedSemester) => {
    // Logic to filter courses by selected semester
    // For now, let's just log the selected semester
    console.log('Selected Semester:', selectedSemester);
  };

  return (
    <div className="GradeReport-container">
      <h1>Grade Report</h1>

      <div className="filter-section">
        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select
          id="semesterFilter"
          onChange={(e) => handleFilterBySemester(e.target.value)}
        >
          <option value="">Select Semester</option>
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      <div className="courses-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.name}</h2>
            <p>Grade: {course.grade}</p>
            <p>Semester: {course.semester}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeReportPage;
