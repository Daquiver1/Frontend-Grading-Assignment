import React, { useState } from 'react';
import './GradeReport.css';
import Footer from './Footer';

const GradeReport = () => {
  const [grades] = useState([
    { semester: 'First Semester - 2023', year: 2023, courses: [
        { name: 'CHEM113: FOUNDATION CHEMISTRY I', grade: 'B+' },
        { name: 'CHEM120: GENERAL CHEMISTRY LABORATORY', grade: 'B+' },
        { name: 'DCIT101: INTRODUCTION TO COMPUTER SCIENCE', grade: 'A' },
        { name: 'MATH121: ALGEBRA AND TRIGONOMETRY', grade: 'B' },
        { name: 'PHYS105: PRACTICAL PHYSICS I', grade: 'B' },
        { name: 'PHYS143: MECHANICS AND THERMAL PHYSICS', grade: 'A' },
        { name: 'UGRC150: CRITICAL THINKING AND PRACTICAL REASONING', grade: 'A' },
      ],
    },
    { semester: 'Second Semester - 2023', year: 2023, courses: [
        { name: 'CHEM114: FOUNDATION CHEMISTRY II', grade: 'C+' },
        { name: 'DCIT104: PROGRAMMING FUNDAMENTALS', grade: 'A' },
        { name: 'MATH122: CALCULUS I', grade: 'C+' },
        { name: 'PHYS106: PRACTICAL PHYSICS II', grade: 'A' },
        { name: 'PHYS144: ELECTRICITY AND MAGNETISM', grade: 'B+' },
        { name: 'UGRC110: ACADEMIC WRITING I', grade: 'A' },
      ],
    },
    { semester: 'First Semester - 2023/24', year: '2023/24', courses: [
        { name: 'DCIT201: PROGRAMMING I', grade: 'A' },
        { name: 'DCIT203: DIGITAL AND LOGIC SYSTEMS DESIGN', grade: 'C+' },
        { name: 'DCIT205: MULTIMEDIA AND WEB DESIGN', grade: null },
        { name: 'MATH223: CALCULUS II', grade: null },
        { name: 'PHYS205: PRACTICAL PHYSICS III', grade: 'B' },
        { name: 'PHYS241: ATOMIC PHYSICS AND QUANTUM PHENOMENA', grade: 'A' },
        { name: 'PHYS245: ELECTROMAGNETISM', grade: 'B+' },
        { name: 'UGRC239: INTRO. TO AFRICAN STUDIES: SOC. FRAMEWORK OF DEV.', grade: 'A' },
      ],
    },
   
  ]);

  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const filterGrades = () => {
    if (selectedSemester === '' && selectedYear === '') {
      return grades;
    }

    return grades.filter((semester) => 
      (selectedSemester === '' || semester.semester === selectedSemester) &&
      (selectedYear === '' || semester.year.toString() === selectedYear)
    );
  };

  return (
    <body>
    <div className="grade-report-container">
      <h2>Grade Report</h2>
      <div className="filter-section">
        <label>
          Select Semester:
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            <option value="">All Semesters</option>
            <option value="First Semester - 2023">First Semester 2023</option>
            <option value="Second Semester - 2023">Second Semester 2023</option>
            <option value="First Semester - 2023/24">First Semester 2023/24</option>
          </select>
        </label>
        <label>
          Select Academic Year:
          <input
            type="text"
            placeholder="Enter academic year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          />
        </label>
      </div>
      <div className="grades-list">
        {filterGrades().map((semester, index) => (
          <div key={index} className="semester-container">
            <h3>{semester.semester}</h3>
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course, courseIndex) => (
                  <tr key={courseIndex}>
                    <td>{course.name}</td>
                    <td>{course.grade !== null ? course.grade : 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div> 
    <Footer position='relative' />
    </body>
  );
};

export default GradeReport;
