import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GradeReport = () => {
  const [gradeReport, setGradeReport] = useState([
    { course: 'DCIT 101', grade: 'A', semester: 'First 2022', creditHours: 3 },
    { course: 'DCIT 103', grade: 'A', semester: 'First 2022' , creditHours: 3},
    { course: 'MATH 121', grade: 'B', semester: 'First 2022' , creditHours: 3},
    { course: 'MATH 123', grade: 'A', semester: 'First 2022', creditHours: 3 },
    { course: 'STAT 111', grade: 'A', semester: 'First 2022' , creditHours: 3 },
    { course: 'UGRC 150', grade: 'A', semester: 'First 2022' , creditHours: 3 },
    { course: 'DCIT 102', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'DCIT 104', grade: 'C', semester: 'Second 2022' , creditHours: 3},
    { course: 'MATH 122', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'MATH 126', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'STAT 112', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'UGRC 110', grade: 'N/A', semester: 'Second 2022', creditHours: 3 },
    { course: 'DCIT 201', grade: 'A', semester: 'First 2023' , creditHours: 3},
    { course: 'DCIT 203', grade: 'A', semester: 'First 2023', creditHours: 3 },
    { course: 'DCIT 205', grade: 'A', semester: 'First 2023' , creditHours: 3},
    { course: 'DCIT 207', grade: 'B', semester: 'First 2023', creditHours: 3 },
    { course: 'MATH 223', grade: 'A', semester: 'First 2023', creditHours: 3 },
    { course: 'CBAS 210', grade: 'B+', semester: 'First 2023', creditHours: 3 },
    
  ]);

  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedSemester, setSelectedSemester] = useState('All');

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSelectedSemester('All'); 
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const filteredGrades = gradeReport.filter((grade) => {
    const yearFilter =
      selectedYear === 'All' ? true : grade.semester.includes(selectedYear);

    const semesterFilter =
      selectedSemester === 'All'
        ? true
        : grade.semester === selectedSemester;

    return yearFilter && semesterFilter;
  });

  const calculateGPA = () => {
    const gradeValues = {
      'A': 4.0,
      'B+': 3.5,
      'B': 3.0,
      'C+': 2.5,
      'C': 2.0,
      'D+': 1.5,
      'D': 1.0,
      'E': 0.0,
      'F': 0.0,
    };
  
    let totalGradePoints = 0;
    let totalCreditHours = 0;
  
    gradeReport.forEach((grade) => {
      if (gradeValues[grade.grade] !== undefined) {
        totalGradePoints += gradeValues[grade.grade] * grade.creditHours;
        totalCreditHours += grade.creditHours;
      }
    });
  
    if (totalCreditHours === 0) {
      return 'N/A'; 
    }
  
    const gpa = totalGradePoints / totalCreditHours;
    return gpa.toFixed(2);
  };
  

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Grade Report</h1>

      <div className="mb-3">
        <label htmlFor="year" className="form-label">
          Filter by Year:
        </label>
        <select
          className="form-select"
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <div className="mb-3">
  <label htmlFor="semester" className="form-label">
    Filter by Semester:
  </label>
  <select
    className="form-select"
    id="semester"
    value={selectedSemester}
    onChange={handleSemesterChange}
  >
    <option value="All">All</option>
    <option value="First 2022">First 2022</option>
    <option value="Second 2022">Second 2022</option>
    <option value="First 2023">First 2023</option>
  </select>
</div>


      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
            <th>Credit Hours</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
              <td>{grade.semester}</td>
              <td>{grade.creditHours}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p>GPA: {calculateGPA()}</p>
      </div>
    </div>
  );
};

export default GradeReport;
