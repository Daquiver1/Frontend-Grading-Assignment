import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GradeReport.css';

function GradeReport() {
  const [selectedSemester, setSelectedSemester] = useState('All');
  const gradeData = [
    { course: 'Dcit205', grade: 'A', semester: '2nd semester' },
    { course: 'Dcit207', grade: 'B+', semester: '2nd semester' },
    { course: 'Maths123', grade: 'A-', semester: '1st semester' },
    { course: 'Maths122', grade: 'B', semester: '1st semester' },
    { course: 'Cbas210', grade: 'A', semester: '2nd semester' },
    { course: 'Dcit201', grade: 'B-', semester: '2nd semester' },
    { course: 'Dcit103', grade: 'A', semester: '1st semester' },
    { course: 'UGRC120', grade: 'A', semester: '1st semester' },
  
  ];

  const filteredGrades = selectedSemester === 'All'
    ? gradeData
    : gradeData.filter(item => item.semester === selectedSemester);

  const semesters = ['All', ...new Set(gradeData.map(item => item.semester))];

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <div className="grade-report-container">
      <div className="dropdown">
        <button className="dropdown-button">Menu</button>
        <div className="dropdown-content">
          <Link to="/" className="dropdown-item">Landing</Link>
          <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
          <Link to="/GradeReport" className="dropdown-item">Grade Report</Link>
          <Link to="/missing-grade-form" className="dropdown-item">Missing Grade Form</Link>
          <Link to="/InstructorContactPage" className="dropdown-item">Instructor Contact</Link>
          <Link to="/HelpAndSupport" className="dropdown-item">Help and Support</Link>
        </div>
      </div>

      <h1 className="grade-report-title">Grade Report</h1>

      <div className="semester-filter">
        <label htmlFor="semesterSelect">Filter by Semester:</label>
        <select
          id="semesterSelect"
          value={selectedSemester}
          onChange={handleSemesterChange}
        >
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>{semester}</option>
          ))}
        </select>
      </div>

      <div className="grade-list">
        {filteredGrades.map((grade, index) => (
          <div key={index} className="grade-item">
            <span className="course-name">{grade.course}</span>
            <span className="course-grade">{grade.grade}</span>
            <span className="course-semester">{grade.semester}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradeReport;