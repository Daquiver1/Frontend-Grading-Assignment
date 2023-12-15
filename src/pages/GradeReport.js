import React, { useState } from 'react';
import './GradeReport.css';

const GradeReport = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedSemester, setSelectedSemester] = useState('All');

  const tableData = [
    { courseName: 'DCIT 101', creditHours: 3, grade: 'A', hasMissingGrade: false, level: 100, semester: 1 },
    { courseName: 'DCIT 103', creditHours: 3, grade: 'C+', hasMissingGrade: false, level: 100, semester: 1 },
    { courseName: 'DCIT 105', creditHours: 3, grade: 'B', hasMissingGrade: false, level: 100, semester: 1 },
    { courseName: 'MATH 121', creditHours: 3, grade: 'B+', hasMissingGrade: false, level: 100, semester: 1 },
    { courseName: 'MATH 123', creditHours: 3, grade: 'A', hasMissingGrade: false, level: 100, semester: 1 },
    { courseName: 'STAT 111', creditHours: 3, grade: 'A', hasMissingGrade: false, level: 100, semester: 1 },
    { courseName: 'UGRC 150', creditHours: 3, grade: 'B+', hasMissingGrade: false, level: 100, semester: 1 },
    { courseName: 'DCIT 102', creditHours: 3, grade: 'C+', hasMissingGrade: false, level: 100, semester: 2 },
    { courseName: 'DCIT 104', creditHours: 3, grade: 'A', hasMissingGrade: false, level: 100, semester: 2 },
    { courseName: 'MATH 122', creditHours: 3, grade: 'Missing', hasMissingGrade: true, level: 100, semester: 2 },
    { courseName: 'MATH 126', creditHours: 3, grade: 'A', hasMissingGrade: false, level: 100, semester: 2 },
    { courseName: 'STAT 112', creditHours: 3, grade: 'Missing', hasMissingGrade: true, level: 100, semester: 2 },
    { courseName: 'UGRC 110', creditHours: 3, grade: 'Missing', hasMissingGrade: true, level: 100, semester: 2 },
    { courseName: 'CBAS 210', creditHours: 3, grade: 'N/A', hasMissingGrade: false, level: 200, semester: 1 },
    { courseName: 'DCIT 201', creditHours: 3, grade: 'N/A', hasMissingGrade: false, level: 200, semester: 1 },
    { courseName: 'DCIT 203', creditHours: 3, grade: 'N/A', hasMissingGrade: false, level: 200, semester: 1 },
    { courseName: 'DCIT 205', creditHours: 3, grade: 'N/A', hasMissingGrade: false, level: 200, semester: 1 },
    { courseName: 'DCIT 207', creditHours: 3, grade: 'N/A', hasMissingGrade: false, level: 200, semester: 1 },
    { courseName: 'DCIT 209', creditHours: 3, grade: 'N/A', hasMissingGrade: false, level: 200, semester: 1 },

    // Add more courses as needed
  ];

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
  };

  const filteredData = tableData.filter(
    (course) =>
      (selectedLevel === 'All' || course.level === parseInt(selectedLevel)) &&
      (selectedSemester === 'All' || course.semester === parseInt(selectedSemester))
  );

  return (
    <div className="grade-report">
    <div className="tab-2">
    <div className="grade-report-container">
      <div className="filter-panel">
        <div className="filter-option">
          <label>Filter by Level:</label>
          <select onChange={(e) => handleLevelChange(e.target.value)} value={selectedLevel}>
            <option value="All">All Levels</option>
            <option value="100">Level 100</option>
            <option value="200">Level 200</option>
            <option value="300">Level 300</option>
            <option value="400">Level 400</option>
          </select>
        </div>

        <div className="filter-option">
          <label>Filter by Semester:</label>
          <select onChange={(e) => handleSemesterChange(e.target.value)} value={selectedSemester}>
            <option value="All">All Semesters</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Credit Hours</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.courseName}</td>
                <td>{row.creditHours}</td>
                <td className={row.hasMissingGrade ? 'missing-grade' : ''}>{row.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default GradeReport;
