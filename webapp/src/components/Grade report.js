import React, { useState } from 'react';
import "./Grade Report.css";

const coursesData = [
    { id: 1, name: 'Calaulus II',       grade: 'A' },
    { id: 2, name: 'Computational Mathematics',  grade: 'B' },
    { id: 3, name: 'Vector Mechanics', grade: 'A' },
    { id: 3, name: 'DCIT205', grade: 'A' },
  ];
  
const coursesData2 = [
    { id: 1, name: 'DCIT208',   grade: 'N/A' },
    { id: 2, name: 'Math224',    grade: 'B' },
    { id: 3, name: 'Math222', grade: 'A' },
    { id: 3, name: 'Vector Mechanics II', grade: 'N/A' },
  ];


 const GradeReport=()=>{
          const [filter, setFilter] = useState('');
    
          const handleFilterChange = (event) => {
            setFilter(event.target.value);
        };

        const filterCourses = (course) => {
            return course.name.toLowerCase().includes(filter.toLowerCase());
          };
     return(
        <div >
            {/* <div className="welcome">
//                 <h2 >Grades</h2>
//                 <h3 className="ui button">Level 200</h3>
//                 <p>Webdesign - N/A</p>
//                 <p>Vector Geometry - A</p>
//                 <p> Algebra and Geometry- A</p>
//                 <p> Introduction to Statistics I- A</p>
//                 <p> Calculus II- A</p>
//                 <p>Programming I - N/A</p>

//              </div>  */}
             <h1 className='ui teal inverted segment'>Grade Report</h1>

{/* Filter input */}
<label htmlFor="filter">Filter Courses:</label>
<input
  type="text"
  id="filter"
  value={filter}
  onChange={handleFilterChange}
  placeholder="Type to filter courses"
/>

<h2 className='intro-header'>First Semester</h2>
<table className="grade-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Course Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    {coursesData.filter(filterCourses).map((course) => (
      <tr key={course.id}>
        <td>{course.id}</td>
        <td>{course.name}</td>
        <td>{course.grade}</td>
      </tr>
    ))}
  </tbody>
</table>

<h2 className='intro-header'>Second Semester</h2>
<table className="grade-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Course Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    {coursesData2.filter(filterCourses).map((course) => (
      <tr key={course.id}>
        <td>{course.id}</td>
        <td>{course.name}</td>
        <td>{course.grade}</td>
      </tr>
    ))}
  </tbody>
</table>



         </div>
     )
 }

 export default GradeReport; 