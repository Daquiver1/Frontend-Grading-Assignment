

import React from 'react';
import './UserInfo.css';

const UserInfo = ({ studentName, academicLevel, course, missingGrades }) => {
  return (
    <div className="user-info-container">
      <div className="user-info-header">
        <h2>User Info</h2>
      </div>
      <div className="user-info-content">
        <p><strong>Name:</strong>NHYIRABA DAVID KOFI {studentName}</p>
        <p><strong>Level:</strong> 200{academicLevel}</p>
        <p><strong>Semester:</strong> FIRST SEMESTER{academicLevel}</p>
        <p><strong>Course:</strong> INFORMATION TECHNOLOGY{course}</p>
        <p><strong>Missing Grades:</strong> 4{missingGrades}</p>
      </div>
    </div>
  );
};

export default UserInfo;
