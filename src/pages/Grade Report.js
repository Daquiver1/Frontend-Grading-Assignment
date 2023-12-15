import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Grade.css';

const Grade = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  // Sample grades data with updated semester names
  const gradesData = [
    { year: 2023, semester: 'Semester 1', course: 'MATH 223', grade: 'A' },
    { year: 2023, semester: 'Semester 1', course: 'MATH 126', grade: 'B' },
    { year: 2023, semester: 'Semester 1', course: 'UGRC 220', grade: 'A+' },
    { year: 2023, semester: 'Semester 1', course: 'DCIT 205', grade: 'A' },
    { year: 2023, semester: 'Semester 1', course: 'STAT 223 ', grade: 'B' },
    { year: 2023, semester: 'Semester 2', course: 'STAT 231', grade: 'A+' },
    { year: 2023, semester: 'Semester 2', course: 'DCIT 233', grade: 'A' },
    { year: 2023, semester: 'Semester 2', course: 'MATH 253', grade: 'A' },
    { year: 2023, semester: 'Semester 2', course: 'MATH 136', grade: 'B' },
    { year: 2023, semester: 'Semester 2', course: 'UGRC 230', grade: 'A+' },
    { year: 2022, semester: 'Semester 1', course: 'DCIT 105', grade: 'A' },
    { year: 2022, semester: 'Semester 1', course: 'STAT 123 ', grade: 'B' },
    { year: 2022, semester: 'Semester 1', course: 'STAT 121', grade: 'A+' },
    { year: 2022, semester: 'Semester 1', course: 'DCIT 103', grade: 'A' },
    { year: 2022, semester: 'Semester 1', course: 'MATH 223', grade: 'A' },
    { year: 2022, semester: 'Semester 2', course: 'MATH 126', grade: 'B' },
    { year: 2022, semester: 'Semester 2', course: 'UGRC 120', grade: 'A+' },
    { year: 2022, semester: 'Semester 2', course: 'DCIT 105', grade: 'A' },
    { year: 2022, semester: 'Semester 2', course: 'STAT 123 ', grade: 'B' },
    { year: 2021, semester: 'Semester 1', course: 'STAT 221', grade: 'A+' },
    { year: 2021, semester: 'Semester 1', course: 'DCIT 203', grade: 'A' },
    { year: 2021, semester: 'Semester 1', course: 'MATH 223', grade: 'A' },
    { year: 2021, semester: 'Semester 1', course: 'MATH 126', grade: 'B' },
    { year: 2021, semester: 'Semester 1', course: 'UGRC 220', grade: 'A+' },
    { year: 2021, semester: 'Semester 2', course: 'DCIT 205', grade: 'A' },
    { year: 2021, semester: 'Semester 2', course: 'STAT 223 ', grade: 'B' },
    { year: 2021, semester: 'Semester 2', course: 'STAT 221', grade: 'A+' },
    { year: 2021, semester: 'Semester 2', course: 'DCIT 203', grade: 'A' },
    // ... Add more data for different years and semesters
  ];

  // Filter grades based on the selected year and semester
  const filteredGrades = gradesData.filter(
    (grade) =>
      (selectedYear === 'all' || grade.year === parseInt(selectedYear)) &&
      (selectedSemester === 'all' || grade.semester === selectedSemester)
  );

  // Extract unique years and semesters for filter options
  const uniqueYears = [...new Set(gradesData.map((grade) => grade.year))];
  const uniqueSemesters = [...new Set(gradesData.map((grade) => grade.semester))];

  return (
    <>
      <Navbar />
      <div>
        <h1 style={{ textAlign: 'center' }}>Grade Report</h1>

        {/* Filter options */}
        <div>
          <label htmlFor="yearFilter">Filter by Year:</label>
          <select id="yearFilter" value={selectedYear} onChange={handleYearChange}>
            <option value="all">All Years</option>
            {uniqueYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <label htmlFor="semesterFilter">Filter by Semester:</label>
          <select id="semesterFilter" value={selectedSemester} onChange={handleSemesterChange}>
            <option value="all">All Semesters</option>
            {uniqueSemesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>

        {/* Grade table */}
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Semester</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {filteredGrades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.year}</td>
                <td>{grade.semester}</td>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Grade;
