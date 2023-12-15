import React, { useState, useEffect } from 'react';
import './GradeReportPage.css'

const GradeReportPage = () => {
  const [grades, setGrades] = useState([]);
  const [filteredGrades, setFilteredGrades] = useState([]);
  const [selectedYear, setSelectedYear] = useState('All');

  useEffect(() => {
    // Simulated data - replace with your actual data fetching logic
    const simulatedData = [
      { course: 'Math 223', grade: 'A', year: 2023, semester: 'First Semester' },
      { course: 'Dcit 201', grade: 'B', year: 2023, semester: 'First Semester' },
      { course: 'Dcit 203', grade: 'A', year: 2023, semester: 'First Semester' },
      { course: 'Dcit 207', grade: 'A', year: 2023, semester: 'First Semester' },
      { course: 'Dcit 205', grade: 'A', year: 2023, semester: 'First Semester' },
      { course: 'CBAS', grade: 'A', year: 2023, semester: 'First Semester' },
     
    ];

    setGrades(simulatedData);
    setFilteredGrades(simulatedData);
  }, []);

  const handleFilterChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);

    if (selectedYear === 'All') {
      setFilteredGrades(grades);
    } else {
      const filtered = grades.filter(course => course.year === parseInt(selectedYear));
      setFilteredGrades(filtered);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Grade Report</h1>

      {grades.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="filter" className="block text-sm font-bold mb-2">Filter by Year:</label>
            <select
              id="filter"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleFilterChange}
              value={selectedYear}
            >
              <option value="All">All</option>
              {/* You may dynamically generate options based on available years */}
              <option value="2023">2023</option>
            </select>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Your Grades</h2>
            <ul>
              {filteredGrades.map((course, index) => (
                <li key={index}>
                  {course.course}: {course.grade} ({course.semester} {course.year})
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default GradeReportPage;
