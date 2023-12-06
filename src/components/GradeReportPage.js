import React, { useState } from 'react';

const GradeReportPage = () => {
  // Placeholder data for courses and grades
  const mockupData = [
    { semester: 'Semester 1', courses: ['Course A', 'Course B', 'Course C'], grades: ['A', 'B', 'C'] },
    { semester: 'Semester 2', courses: ['Course X', 'Course Y', 'Course Z'], grades: ['B', 'A', 'A'] },
    // Add more mockup data as needed
  ];

  // State for selected semester (for filter option)
  const [selectedSemester, setSelectedSemester] = useState('');

  // Filtered data based on selected semester
  const filteredData = selectedSemester
    ? mockupData.filter((data) => data.semester === selectedSemester)
    : mockupData;

  return (
    <div className="grade-report-container">
      <h2>Grade Report</h2>

      {/* Filter option */}
      <div className="filter-section">
        <label>Semesters:</label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="">All Semesters</option>
          {/* Placeholder for dynamic semester options */}
          <option value="Semester 1">Semester 1</option>
          <option value="Semester 2">Semester 2</option>
          {/* Add more semester options as needed */}
        </select>
      </div>

      {/* Display courses and grades */}
      <div className="grade-list">
        {filteredData.map((data) => (
          <div key={data.semester} className="semester-section">
            <h3>{data.semester}</h3>
            <ul>
              {data.courses.map((course, index) => (
                <li key={index}>
                  <span>{course}:</span> <span>{data.grades[index]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeReportPage;
