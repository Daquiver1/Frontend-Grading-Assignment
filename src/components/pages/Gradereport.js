import React, { useState } from 'react';
import Footer from './Footer';

function GradeReport() {
  const [filter, setFilter] = useState('');

  // Sample data for courses and grades
  const courses = [
    { id: 1, name: 'Mathematics', grade: 'A', semester: 'Spring 2023' },
    { id: 2, name: 'History', grade: 'B+', semester: 'Spring 2023' },
    { id: 3, name: 'Physics', grade: 'A-', semester: 'Fall 2022' },
    // Add more courses as needed
  ];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCourses = filter
    ? courses.filter((course) => course.semester === filter)
    : courses;

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Grade Report</h1>
        <div className="flex items-center">
          <label htmlFor="semesterFilter" className="mr-2">
            Filter by Semester:
          </label>
          <select
            id="semesterFilter"
            onChange={handleFilterChange}
            value={filter}
            className="p-2 border rounded-md"
          >
            <option value="">All</option>
            <option value="Spring 2023">Spring 2023</option>
            <option value="Fall 2022">Fall 2022</option>
            {/* Add more options for other semesters */}
          </select>
        </div>
      </div>

      <table className="w-full border-collapse border rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Course Name</th>
            <th className="p-2 border">Grade</th>
            <th className="p-2 border">Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              <td className="p-2 border">{course.name}</td>
              <td className="p-2 border">{course.grade}</td>
              <td className="p-2 border">{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default GradeReport;
