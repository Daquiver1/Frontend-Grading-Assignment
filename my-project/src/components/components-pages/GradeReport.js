import React, { useState } from "react";
import styles from  "../components-css/GR.css"; 

const GradeReport = () => {
  const [courses, setCourses] = useState([
    { name: "Computer Science 101", grade: "A", semester: "Fall 2023" },
    { name: "Mathematics 202", grade: "B+", semester: "Spring 2024" },
    { name: "Literature 303", grade: "C", semester: "Fall 2023" },
    { name: "Physics 404", grade: "A-", semester: "Spring 2024" },
  ]);
  const [selectedSemester, setSelectedSemester] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => {
    if (selectedSemester === "All") return true;
    return course.semester === selectedSemester;
  });

  const searchedCourses = filteredCourses.filter((course) => {
    const lowerName = course.name.toLowerCase();
    return lowerName.includes(searchTerm.toLowerCase());
  });

  const handleSemesterChange = (e) => setSelectedSemester(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="reportPage">
      <h1>Missing Grade Report</h1>
      <div className="filter-bar">
        <select value={selectedSemester} onChange={handleSemesterChange}>
          <option value="All">All Semesters</option>
          <option value="Fall 2023">Fall 2023</option>
          <option value="Spring 2024">Spring 2024</option>
        </select>
        <input
          type="text"
          placeholder="Search by course name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="courseList">
        {searchedCourses.map((course, index) => (
          <li key={index} className="courseItem">
            <span className="courseName">{course.name}</span>
            <span className="grade">{course.grade}</span>
          </li>
        ))}
      </ul>
      {searchedCourses.length === 0 && (
        <p className="no-results">No courses found for your search.</p>
      )}
    </div>
  );
};

export default GradeReport;
