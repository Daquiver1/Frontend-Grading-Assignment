import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div className='lists'>
      <h2>Grades for the semeseter</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong>: {course.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;