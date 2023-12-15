import React, { useState } from "react";
import "./GradeReportPage.css";

const GradeReportPage = () => {
  const mockData = [
    { course: "Mathematics", grade: "A", semester: "1st Semester" },
    { course: "History", grade: "B", semester: "1st Semester" },
    { course: "Physics", grade: "A-", semester: "1st Semester" },
    { course: "English Literature", grade: "B+", semester: "1st Semester" },
    { course: "Computer Science", grade: "A", semester: "1st Semester" },
    { course: "Chemistry", grade: "B", semester: "1st Semester" },
    { course: "Art History", grade: "A", semester: "1st Semester" },
    { course: "Economics", grade: "B", semester: "1st Semester" },
    { course: "Geography", grade: "A", semester: "2nd Semester" },
    { course: "French", grade: "B", semester: "2nd Semester" },
    { course: "Statistics", grade: "A-", semester: "2nd Semester" },
    { course: "Psychology", grade: "B+", semester: "2nd Semester" },
    { course: "Programming", grade: "A", semester: "2nd Semester" },
    { course: "Biology", grade: "B", semester: "2nd Semester" },
    { course: "Sociology", grade: "A", semester: "2nd Semester" },
    { course: "Political Science", grade: "B", semester: "2nd Semester" },
    // Add more courses as needed
  ];

  const [selectedSemester, setSelectedSemester] = useState("All");

  const handleFilterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const filteredData =
    selectedSemester === "All"
      ? mockData
      : mockData.filter((course) => course.semester === selectedSemester);

  return (
    <div className="grade-report-container">
      <h2 className="grade-report-title">Grade Report</h2>
      <div className="filter-section">
        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select
          id="semesterFilter"
          value={selectedSemester}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="1st Semester">1st Semester</option>
          <option value="2nd Semester">2nd Semester</option>
        </select>
      </div>
      <div className="course-list">
        {filteredData.map((course, index) => (
          <div key={index} className="course-item">
            <p className="course-name">{course.course}</p>
            <p className="course-grade">Grade: {course.grade}</p>
            <p className="course-semester">Semester: {course.semester}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeReportPage;
