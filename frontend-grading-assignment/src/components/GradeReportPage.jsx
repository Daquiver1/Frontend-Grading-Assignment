import React, { useState, useEffect } from 'react';

function GradeReportPage() {
 const [courses, setCourses] = useState([]);
 const [filteredCourses, setFilteredCourses] = useState([]);
 const [semester, setSemester] = useState('');

 useEffect(() => {
    setCourses([
      { id: 1, name: 'Course 1', grade: 'A', semester: 'Spring 2022' },
      { id: 2, name: 'Course 2', grade: 'B', semester: 'Fall 2021' },
    ]);
 }, []);

 useEffect(() => {
    setFilteredCourses(courses.filter((course) => course.semester === semester));
 }, [courses, semester]);

 const handleSemesterChange = (e) => {
    setSemester(e.target.value);
 };

 return (
    <div className="container">
      <h2 className="report-title">Grade Report</h2>
      <div className="input-block">
        <label htmlFor="semester" className="text-block">Semester:</label>
        <select
          id="semester"
          value={semester}
          onChange={handleSemesterChange}
        >
          <option value="">All</option>
          <option value="Spring 2022">Spring 2022</option>
          <option value="Fall 2021">Fall 2021</option>
        </select>
      </div>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.grade}</td>
              <td>{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default GradeReportPage;