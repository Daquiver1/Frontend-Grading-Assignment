// src/pages/GradeReportPage.js
import React, { useState } from 'react';
import '../styles/gradereport.css';
import Navbar from '../components/Navbar'


function GradeReport() {
  // Simulated data for demonstration purposes
  const gradeReportData = [
    { course: 'MATH 223', grade: 'A', semester: 'LEVEL 200', instructor: 'Dr. Smith', credits: 3 },
    { course: 'DCIT 203', grade: 'B+', semester: 'LEVEL 200', instructor: 'Prof. Johnson', credits: 3 },
    { course: 'DCIT 201', grade: 'A', semester: 'LEVEL 200', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'DCIT 205', grade: 'A', semester: 'LEVEL 200', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'STAT 221', grade: 'A', semester: 'LEVEL 200', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'DCIT 223', grade: 'A', semester: 'LEVEL 200', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'DCIT 101', grade: 'A', semester: 'LEVEL 100', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'DCIT 103', grade: 'A', semester: 'LEVEL 100', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'MATH 123', grade: 'A', semester: 'LEVEL 100', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'MATH 121', grade: 'A', semester: 'LEVEL 100', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'STAT 111', grade: 'A', semester: 'LEVEL 100', instructor: 'Dr. Anderson', credits: 3 },
    { course: 'UGRC 230', grade: 'A', semester: 'LEVEL 100', instructor: 'Dr. Anderson', credits: 3 },


    // Add more courses as needed
  ];

  // State for filtering by semester
  const [selectedSemester, setSelectedSemester] = useState('All');

  // Get unique semesters for the filter dropdown
  const uniqueSemesters = Array.from(new Set(gradeReportData.map((data) => data.semester)));

  // Filter the data based on selected semester
  const filteredData =
    selectedSemester === 'All'
      ? gradeReportData
      : gradeReportData.filter((data) => data.semester === selectedSemester);

  return (
    <div className="grade-report-page">
      <Navbar></Navbar>
      <h1>Grade Report</h1>
      <div className="filter-section">
        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select
          id="semesterFilter"
          onChange={(e) => setSelectedSemester(e.target.value)}
          value={selectedSemester}
        >
          <option value="All">All</option>
          {uniqueSemesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>
      <section>
        <h2>Grade Details</h2>
        {filteredData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
                <th>Semester</th>
                <th>Instructor</th>
                <th>Credits</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.course}</td>
                  <td>{data.grade}</td>
                  <td>{data.semester}</td>
                  <td>{data.instructor}</td>
                  <td>{data.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No grades available for the selected semester.</p>
        )}
      </section>
    </div>
  );
}

export default GradeReport;
