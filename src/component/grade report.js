// GradeReport.js
import React, { useState } from 'react';
import GradeList from './gradelist'; // Update the path if necessary
import './grade.css';
import coursedata from './coursedata';

const GradeReport = () => {
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const semesters = Object.keys(coursedata);
  const levels = selectedSemester ? Object.keys(coursedata[selectedSemester] || {}) : [];

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
    setSelectedLevel('All'); // Reset selected level when changing the semester
  };

  const filteredCourses = selectedSemester && selectedLevel ? coursedata[selectedSemester]?.[selectedLevel] || [] : [];

  return (
    <div className="grade-report-container">
      <h1>Grade Report</h1>
      <div className="filters">
        <label htmlFor="semesterFilter">Select Semester:</label>
        <select
          id="semesterFilter"
          value={selectedSemester}
          onChange={(e) => handleSemesterChange(e.target.value)}
        >
          <option value="All">All Semesters</option>
          {semesters.map((semester) => (
            <option key={semester} value={semester}>{semester}</option>
          ))}
        </select>
        <label htmlFor="levelFilter">Select Level:</label>
        <select
          id="levelFilter"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="All">All Levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>
      <GradeList grades={filteredCourses} />
    </div>
  );
};

export default GradeReport;
