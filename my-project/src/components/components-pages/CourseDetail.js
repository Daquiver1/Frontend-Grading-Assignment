import React, { useState } from 'react';
import "../components-css/CourseD.css"


const CourseDetail = ({ course }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="course-detail">
      <h2
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: 'pointer', color: expanded ? 'blue' : 'black' }}
      >
        {course.name} - {course.gradeLetter}
      </h2>
      {expanded && (
        <div>
          <p>Instructor: {course.instructor}</p>
          <p>Credit Hours: {course.creditHours}</p>
          <p>Grade Percentage: {course.gradePercentage}%</p>
          <ul>
            {course.assignments.map((assignment, index) => (
              <li key={index}>
                {assignment.name}: {assignment.grade}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
