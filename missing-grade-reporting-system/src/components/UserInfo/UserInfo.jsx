// components/UserInfo/UserInfo.jsx

import React from 'react';
import './UserInfo.css';

const UserInfo = ({ studentName, level, missingGrades }) => {
  return (
    <div className="user-info-container">
      <div className="user-info">
        <p>Student Name: {studentName}</p>
        <p>Level: {level}</p>
        <p>Missing Grades: {missingGrades}</p>
      </div>
    </div>
  );
};

export default UserInfo;
