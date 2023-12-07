// GradeReportPage.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const GradeReportPage = () => {
  // Dummy data for grade report
  const gradeReportData = [
    { id: 1, course: 'Math 101', instructor: 'John Doe', grade: 'A', semester: 'Spring 2023' },
    { id: 2, course: 'Physics 201', instructor: 'Jane Smith', grade: 'B+', semester: 'Spring 2023' },
    { id: 3, course: 'History 101', instructor: 'Bob Johnson', grade: 'A-', semester: 'Fall 2022' },
    // Add more grade report data as needed
  ];

  const [selectedSemester, setSelectedSemester] = useState('All Semesters');

  // Filter grade report data based on selected semester
  const filteredGradeReportData = selectedSemester === 'All Semesters'
    ? gradeReportData
    : gradeReportData.filter((entry) => entry.semester === selectedSemester);

  return (
    <div className="container mx-auto my-8">
      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <ul className="flex">
            <li className="mr-4"><a href="/">Home</a></li>
            <li className="mr-4"><a href="/dashboard">Dashboard</a></li>
            <li className="mr-4"><a href="/grade-report">Grade Report</a></li>
            <li className="mr-4"><a href="/missing-grade-form">Missing Grade Form</a></li>
            <li className="mr-4"><a href="/instructor-contact">Instructor Contact</a></li>
            <li className="mr-4"><a href="/help-and-support">Help and Support</a></li>
            {/* Add more links for other pages */}
          </ul>
        </div>
      </nav>

      {/* Filter options for semester/academic year */}
      <div className="max-w-lg mx-auto mb-8">
        <label htmlFor="semesterFilter" className="block text-sm font-medium text-gray-600">Select Semester:</label>
        <select
          id="semesterFilter"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="All Semesters">All Semesters</option>
          <option value="Spring 2023">Spring 2023</option>
          <option value="Fall 2022">Fall 2022</option>
          {/* Add more semesters as needed */}
        </select>
      </div>

      {/* Grade report table */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Grade Report</h2>
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Course</th>
              <th className="py-2 px-4 border">Instructor</th>
              <th className="py-2 px-4 border">Grade</th>
              <th className="py-2 px-4 border">Semester</th>
            </tr>
          </thead>
          <tbody>
            {filteredGradeReportData.map((entry) => (
              <tr key={entry.id}>
                <td className="py-2 px-4 border">{entry.course}</td>
                <td className="py-2 px-4 border">{entry.instructor}</td>
                <td className="py-2 px-4 border">{entry.grade}</td>
                <td className="py-2 px-4 border">{entry.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeReportPage;
