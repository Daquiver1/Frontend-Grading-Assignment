import React from "react";
import "../pages/GradeReport.css";

const LevelContainer = ({ levelData }) => (
  <div className="level-container">
    <div className="header-box">
      <h2>{levelData.level}</h2>
    </div>
    {levelData.semesters.map((semesterData, index) => (
      <div key={index}>
        <div className="level-header">
          <h3>{semesterData.semester}</h3>
        </div>
        <div className="course-and-grade-header">
          <h4>Courses</h4>
          <h4>Grades</h4>
        </div>
        <div className="courses-and-grades-container">
          {semesterData.courses.map((course, idx) => (
            <React.Fragment key={idx}>
              <p>{course.course}</p>
              <p>{course.grade}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default LevelContainer;
