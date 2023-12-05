// GradeReportPage.js
import React, { useState } from "react";

const GradeReportPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const gradeData = [
    // Level 100, First Semester
    { course: "Critical Thinking and Practical Reasoning", grade: "A", level: 100, semester: "First Semester" },
    { course: "Introduction to Computer Science", grade: "B", level: 100, semester: "First Semester" },
    { course: "Office Productivity Tools", grade: "A-", level: 100, semester: "First Semester" },
    { course: "Mathematics for IT Professionals", grade: "B+", level: 100, semester: "First Semester" },
    { course: "Introduction to Statistics and Probability I", grade: "A", level: 100, semester: "First Semester" },
    { course: "Algebra and Trigonometry", grade: "B", level: 100, semester: "First Semester", elective: true },
    { course: "Vectors and Geometry", grade: "A-", level: 100, semester: "First Semester", elective: true },
    { course: "Introduction to Economics I", grade: "B+", level: 100, semester: "First Semester", elective: true },
  ];

  const levels = [100, 200];
  const semesters = ["First Semester", "Second Semester"];
  const years = [1, 2, 3]; // Add more years as needed

  const filteredGradeData = gradeData.filter(
    (data) =>
      (selectedLevel === "All" || data.level === parseInt(selectedLevel)) &&
      (selectedSemester === "All" || data.semester === selectedSemester) &&
      (selectedYear === "All" || calculateYear(data.level, data.semester) === parseInt(selectedYear))
  );

  // Function to calculate the academic year based on level and semester
  const calculateYear = (level, semester) => {
    // Assuming a standard academic year with two semesters per level
    return Math.ceil(level / 2) + (semester === "Second Semester" ? 0 : 1);
  };

  return (
    <div className="container mt-4">
      <h2>Grade Report</h2>

      {/* Level, Semester, and Year filter dropdowns */}
      <div className="mb-3">
        <label htmlFor="levelFilter" className="form-label">
          Filter by Level:
        </label>
        <select
          id="levelFilter"
          className="form-select"
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="All">All</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              Level {level}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="semesterFilter" className="form-label">
          Filter by Semester:
        </label>
        <select
          id="semesterFilter"
          className="form-select"
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="All">All</option>
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="yearFilter" className="form-label">
          Filter by Academic Year:
        </label>
        <select
          id="yearFilter"
          className="form-select"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">All</option>
          {years.map((year) => (
            <option key={year} value={year}>
              Year {year}
            </option>
          ))}
        </select>
      </div>

      {/* Table displaying courses and grades */}
      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Level</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredGradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.course}</td>
              <td>{data.grade}</td>
              <td>{data.level}</td>
              <td>{data.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReportPage;
