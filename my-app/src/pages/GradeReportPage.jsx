import React, { useState } from 'react';
import NavBar  from './NavBar';


const GradeReportPage = () => {
  const [grades] = useState([
    { course: 'Mathematics', semester: 'Fall 2020', grade: 'A' },
    { course: 'Physics', semester: 'Fall 2020', grade: 'B' },
    { course: 'Chemistry', semester: 'Spring 2021', grade: 'A-' },
    { course: 'English', semester: 'Spring 2021', grade: 'B+' },
    { course: 'History', semester: 'Fall 2021', grade: 'A' },
  ]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredGrades = filter
    ? grades.filter((grade) =>
        grade.semester.toLowerCase().includes(filter.toLowerCase())
      )
    : grades;

  return (
    <div className="container px-4 py-8 mx-auto">
      <NavBar />
      <h1 className="mb-4 text-2xl font-bold">Grade Report Page</h1>

      <div className="mb-4">
        <label htmlFor="filter" className="font-bold">
          Filter by Semester/Academic Year:
        </label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Semester/Academic Year</th>
            <th className="px-4 py-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b border-gray-300">{grade.course}</td>
              <td className="px-4 py-2 border-b border-gray-300">{grade.semester}</td>
              <td className="px-4 py-2 border-b border-gray-300">{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReportPage;