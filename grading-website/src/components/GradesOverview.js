import React from "react";

const GradesOverview = ({ grades }) => {
  return (
    <div className="grades-overview-container">
      <h2>Grades Overview</h2>
      <div className="level-header-box">
        <h3>Level 200</h3>
      </div>
      <h4>First Semester</h4>
      <table className="page-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((course) => (
            <tr key={course.course}>
              <td>{course.course}</td>
              <td>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradesOverview;
