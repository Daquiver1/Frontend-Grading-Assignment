import React, { useState } from 'react';

const AppGradeReport = () => {
  // Mock data for grades
  const gradesData = [
    { semester: 'Fall 2022', subjects: { math: 'A', science: 'B', history: 'A' } },
    { semester: 'Spring 2023', subjects: { math: 'B', science: 'A', history: 'C' } },
    // Add more data for additional semesters
  ];

  // State to track selected semester
  const [selectedSemester, setSelectedSemester] = useState(gradesData[0].semester);

  // Function to update selected semester
  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div>
      <h1>Grade Report</h1>

      {/* Semester selection dropdown */}
      <label htmlFor="semesterSelect">Select Semester:</label>
      <select id="semesterSelect" onChange={handleSemesterChange} value={selectedSemester}>
        {gradesData.map((semester) => (
          <option key={semester.semester} value={semester.semester}>
            {semester.semester}
          </option>
        ))}
      </select>

      {/* Display grades for the selected semester */}
      <h2>{selectedSemester} Grades:</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(gradesData.find((semester) => semester.semester === selectedSemester).subjects).map(
            ([subject, grade]) => (
              <tr key={subject}>
                <td>{subject}</td>
                <td>{grade}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppGradeReport;
