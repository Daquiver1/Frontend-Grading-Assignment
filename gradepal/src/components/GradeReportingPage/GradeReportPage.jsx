import React from "react";
import "./GradeReportPage.css"; // Css file

const GradeReportPage = () => {
  const gradeReportData = [
    { course: "DCIT201 PROGRAMMING I", grade: "A", semester: "1st Semester" },
    { course: "DCIT203 DIGITAL AND LOGIC SYSTEM DESIGN ", grade: "A", semester: "1st Semester" },
    { course: "DCIT201 PROGRAMMING I", grade: "C+", semester: "1st Semester" },
    { course: "DCIT205 MULTI MEDIA AND WEB DESIGN MAIN CAMPUS", grade: "A", semester: "1st Semester" },
    { course: "DCIT207 COMPUTER ORGANIZATION & ARCHITECTURE ", grade: "B+", semester: "1st Semester" },
    { course: "MATH223 CALCULUS II", grade: "A", semester: "1st Semester" },
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
