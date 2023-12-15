import React, { useState, useEffect } from 'react';
import './GradeReport.css';
import MainHeader from './MainHeader';
import Footer from './Footer';

const coursesData = [
  { id: 1, name: 'Introduction to Computer Science', grade: 'A', semester: 'First semester' },
  { id: 2, name: 'Data Structures', grade: 'B', semester: 'second semester' },
  { id: 3, name: 'Algorithms', grade: 'A-', semester: ' second semester' },
  { id: 4, name: 'Computer Organization & Architecture',grade: 'A', semester: 'second semester'},
  { id: 5, name: 'Ethical Hacking', grade:'B',semester:'second semester'},
  { id: 6, name: 'Data Analyst', grade:'C', semester:'First semester'},
  { id: 7, name: 'Statistics and probability', grade:'A', semester:'First semester'}, 
  { id: 8, name: 'Multimedia', grade:'A', semester:'second semester'}, 
  { id: 9, name: 'Discrete Mathematics', grade:'B', semester:'First semester'}, 
  { id: 10, name: 'Calculus', grade:'B', semester:'First semester'}, 
  
];

const GradeReport = () => {
  const [grades, setGrades] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('All');

  useEffect(() => {
    // Fetch grades data from the server here if needed
    setGrades(coursesData);
  }, []);

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const filterGradesBySemester = () => {
    if (selectedSemester === 'All') {
      return coursesData;
    }
    return coursesData.filter((course) => course.semester === selectedSemester);
  };

  return (
    <>
    < MainHeader />
    <div className="grade-report-container">
      <h1>Grade Report</h1>

      <div className="filter-section">
        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select id="semesterFilter" onChange={handleSemesterChange} value={selectedSemester}>
          <option value="All">All</option>
          {/* Assume semesters are dynamically obtained from the server */}
          <option value="second semester">Second semester</option>
          <option value="First semester">First semester</option>
          {/* Add more options for other semesters */}
        </select>
      </div>

      <table className="grades-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filterGradesBySemester().map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.grade}</td>
              <td>{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    < Footer />
    </>
  );
};
export default GradeReport;