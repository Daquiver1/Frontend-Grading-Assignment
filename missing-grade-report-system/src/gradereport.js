import React, { useState } from "react";
import "./gradereport.css";
import Header from './Header';
import Footer from './Footer.js';

const gradeData = [
  { id: 1, course: "Mathematics", grade: "A", semester: "First Semester 2023" },
  { id: 2, course: "Science", grade: "B+", semester: "First Semester 2023" },
  { id: 4, course: "Biology", grade: "C", semester: "First Semester 2023" },
  { id: 5, course: "Law", grade: "A-", semester: "First Semester 2023" },
  {
    id: 6,
    course: "Programming",
    grade: "A-",
    semester: "Second Semester 2023",
  },
  { id: 7, course: "Business", grade: "A-", semester: "Second Semester 2023" },
  { id: 8, course: "Art", grade: "A-", semester: "Second Semester 2023" },
  { id: 9, course: "History", grade: "B+", semester: "Second Semester 2023" },
  {
    id: 10,
    course: "Geography",
    grade: "A-",
    semester: "Second Semester 2023",
  },
  { id: 11, course: "Economics", grade: "A-", semester: "First Semester 2024" },
  { id: 12, course: "French", grade: "A-", semester: "First Semester 2024" },
  { id: 13, course: "Physics", grade: "C", semester: "Second Semester 2024" },
  { id: 14, course: "Chemisty", grade: "B+", semester: "Second Semester 2024" },
];

const GradeReport = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredGrades, setFilteredGrades] = useState(gradeData);

  const handleFilter = (year) => {
    setSelectedYear(year);
    if (year === "") {
      setFilteredGrades(gradeData);
    } else {
      const filtered = gradeData.filter((grade) => grade.semester === year);
      setFilteredGrades(filtered);
    }
  };

  return (
    <div className="grade-report">
    <Header />
      <h1>Grade Report</h1>
      <div className="filter">
        <label htmlFor="yearFilter">Filter by Year/Semester:</label>
        <select
          id="yearFilter"
          value={selectedYear}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="First Semester 2023">First Semester 2023</option>
          <option value="Second Semester 2023">Second Semester 2023</option>
          <option value="First Semester 2024">First Semester 2024</option>
          <option value="Second Semester 2024">Second Semester 2024</option>
        </select>
      </div>
      <table className="grade-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
              <td>{grade.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default GradeReport;
