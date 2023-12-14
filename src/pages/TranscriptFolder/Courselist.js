import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import './Courselist.css'


const courses = [
  { level: '100', code: 101, title: 'Intro To CS', grade: 'A', semester: '1' },
  { level: '100', code: 103, title: 'Office Tools', grade: 'A', semester: '1' },
  { level: '100', code: 190, title: 'Statistics Intro', grade: 'B+',  semester: '1' },
  { level: '200', code: 201, title: 'Programming I', grade: 'B+',  semester: '1' },
  { level: '200', code: 205, title: 'Web Development', grade: 'A', semester: '1' },
  { level: '200', code: 203, title: 'Logic Systems', grade: 'B+',  semester: '1' },
  { level: '200', code: 207, title: 'Computer Architecture', grade: 'A', semester: '1' },
  { level: '100', code: 102, title: 'Circuitry', grade: 'B+',  semester: '2' },
  { level: '100', code: 122, title: 'Algebra I', grade: 'A', semester: '1' },
  { level: '200', code: 221, title: 'Algebra II', grade: 'B+',  semester: '2' },
  { level: '100', code: 121, title: 'Probability', grade: 'A', semester: '1' },
  { level: '100', code: 106, title: 'Economics', grade: 'B+',  semester: '2' },
  { level: '200', code: 204, title: 'Data Structures', grade: 'A', semester: '1' },
  { level: '200', code: 206, title: 'Programing III', grade: 'B+',  semester: '2' },
];

const CourseList = () => {
  const [filter, setFilter] = useState({ level: '', semester: '' });

  const filteredCourses = courses.filter(course =>
    (filter.level === '' || course.level === filter.level) &&
    (filter.semester === '' || course.semester === filter.semester)
  );

  return (

    <div>
      <Navbar></Navbar>
    <div className="course-list">
      <h1>Course List</h1>
      <div>
        <label>
          Filter by Year Level:
          <select value={filter.level} onChange={e => setFilter({ ...filter, level: e.target.value })}>
            <option value="">All</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </label>
        <label>
          Filter by Semester:
          <select value={filter.semester} onChange={e => setFilter({ ...filter, semester: e.target.value })}>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
         
            <th>Code</th>
            <th>Title</th>
            <th>Grade</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              
              <td>{course.code}</td>
              <td>{course.title}</td>
              <td>{course.grade}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default CourseList;
