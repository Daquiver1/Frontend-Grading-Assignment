// src/components/gradeReportPage/GradeReportPage.js
import React from "react";
import "./GradeReportPage.css"; // Create this file for styling

const GradeReportPage = () => {
  const gradeReportData = [
    { course: "Mathematics", grade: "A", semester: "1st Semester" },
    { course: "History", grade: "B", semester: "3rd Semester" },
    { course: "Science", grade: "A-", semester: "2st Semester" },
    { course: "English", grade: "C-", semester: "1st Semester" },
    { course: "Economics", grade: "A+", semester: "2st Semester" },
    { course: "Physics", grade: "A-", semester: "3rd Semester" },
    { course: "Chemistry", grade: "B+", semester: "2st Semester" },
    { course: "Biology", grade: "A-", semester: "3rd Semester" },
    { course: "Music", grade: "A-", semester: "1st Semester" },
    { course: "French", grade: "C-", semester: "2st Semester" },
    { course: "Spanish", grade: "D+", semester: "3rd Semester" },
  ];

  return (
    <div className="grade-report-container">
      <h2 className="heading">Grade Report</h2>
      <p className="overview">
        Detailed view of all courses and respective grades.
      </p>

      <div className="filter-section">
        <label htmlFor="semester">Filter by Semester:</label>
        <select id="semester" name="semester">
          <option value="all">All Semesters</option>
          <option value="1st Semester">1st Semester</option>
          <option value="2st Semester">2st Semester</option>
          <option value="3rd Semester">3rd Semester</option>
        </select>
      </div>

      {/* Grade Report Section */}
      <div className="grade-report-section">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {gradeReportData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.course}</td>
                <td>{entry.grade}</td>
                <td>{entry.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
};

export default GradeReportPage;
