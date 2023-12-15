// CourseTable.js

import React from 'react';

const CourseTable = ({ courses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Grade</th>
          <th>Semester</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>{course.name}</td>
            <td>{course.grade}</td>
            <td>{course.semester}</td>
            <td>{course.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
