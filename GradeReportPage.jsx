import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'

function GradeReportPage() {
  let courses = [
    { id: 1,  name: 'ACADEMIC  WRITING', grade: 'A+', 
    semester: 'First Semester' },
    { id: 2, name: 'PROGRAMMING I', grade: 'B+', semester: 'First Semester' },
    { id: 3, name: 'DIGITAL AND LOGICAL SYSTEM DESIGN', grade: 'A-', semester: 'First Semester' },
    { id: 4, name: 'MULTI MEDIA AND WEB DESIGN', grade: 'A+', semester: 'First Semester' },
    { id: 5, name: 'COMPUTER ORGANIZATION AND ARCHITECTURE', grade: 'A-', semester: 'First Semester' },
    { id: 6, name: 'CALCULUS II', grade: 'B-', semester: 'First Semester' },
  
  ];

  let selectedYear = '';

  useEffect(() => {
    console.log(`Fetching data for the year: ${selectedYear}`);
  }, [selectedYear]);

  return (
    <>
    <Header></Header>
    <div className='grade-report-container'>
      <h2 className='gradee'>Grade Report Page</h2>

      <div className='filter-container'>
        <label>Filter by Year:</label>
        <select
          onChange={(e) => (selectedYear = e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select Year
          </option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <h3 className='grade-report1'>Grade Report</h3>
      <table className='grade-table'>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.grade}</td>
              <td>{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer></Footer>
    </>
  );
}

export default GradeReportPage
