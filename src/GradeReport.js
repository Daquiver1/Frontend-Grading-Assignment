// GradeReport.js
import React, { useState } from 'react';

const GradeReport = () => {
  // Placeholder data for courses
  const mockCourses = [
    { id: 1, name: 'Math 101', instructor: 'Dr. Smith', grade: 'A', academicYear: '2023' },
    { id: 2, name: 'History 201', instructor: 'Prof. Johnson', grade: 'B', academicYear: '2023' },
    { id: 3, name: 'Physics 301', instructor: 'Dr. Williams', grade: 'A-', academicYear: '2022' },
    // Add more courses as needed
  ];

  // Since setCourses is not used, you can remove it
  // const [courses, setCourses] = useState(mockCourses);

  const [selectedYear, setSelectedYear] = useState('');

  const filterCoursesByYear = () => {
    if (selectedYear === '') {
      return mockCourses;
    } else {
      return mockCourses.filter((course) => course.academicYear === selectedYear);
    }
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <h1>Grade Report</h1>

      <section className="filter-section">
        <h2>Filter by Academic Year</h2>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more years as needed */}
        </select>
      </section>

      <section className="course-list-section">
        <h2>Course List</h2>
        {selectedYear ? (
          <p>Showing courses for the academic year {selectedYear}</p>
        ) : (
          <p>Showing all courses</p>
        )}

        {filterCoursesByYear().length === 0 ? (
          <p>No courses available</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {filterCoursesByYear().map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.instructor}</td>
                  <td>{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default GradeReport;
