// GradeReport.js
import React, { useState } from "react";
import "../Css/GradeReportPage.css";
import SideNavBar from "./SideNavBar";

const GradeReportPage = () => {
  // Simulated data (replace with actual data fetching logic)
  const gradeData = [
    {
      semester: "First Semester",
      courses: [
        { name: "Maths 205", grade: "A" },
        { name: "CBAS 210", grade: "B" },
        { name: "DCIT 203", grade: "C" },
        { name: "STAT 223", grade: "B" },
      ],
    },
    {
      semester: "Second Semester",
      courses: [
        { name: "Maths 217", grade: "A" },
        { name: "DCIT 211", grade: "B" },
        { name: "STAT 211", grade: "A" },
        { name: "STAT 233", grade: "B" },
      ],
    },
    // Add more semesters and courses as needed
  ];

  const [selectedSemester, setSelectedSemester] = useState("");

  const handleChangeSemester = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="content">
      <SideNavBar />
      <div>
        <h2>Grade Report</h2>

        <label>
          Select Semester:
          <select value={selectedSemester} onChange={handleChangeSemester}>
            <option value="">All Semesters</option>
            {gradeData.map((semester, index) => (
              <option key={index} value={semester.semester}>
                {semester.semester}
              </option>
            ))}
          </select>
        </label>

        {gradeData.map((semester, index) => (
          <div
            key={index}
            className={
              selectedSemester === semester.semester
                ? "semester-container"
                : "hidden"
            }
          >
            <h3>{semester.semester}</h3>
            <ul>
              {semester.courses.map((course, index) => (
                <li key={index}>
                  {course.name}: {course.grade}
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
