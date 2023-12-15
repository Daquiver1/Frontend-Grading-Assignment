import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './nav';

const Dashboard = () => {
  const [gradeReport, setGradeReport] = useState([
    { course: 'DCIT 102', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'DCIT 104', grade: 'C', semester: 'Second 2022' , creditHours: 3},
    { course: 'MATH 122', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'MATH 126', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'STAT 112', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'UGRC 110', grade: 'N/A', semester: 'Second 2022', creditHours: 3 },
    { course: 'DCIT 201', grade: 'A', semester: 'First 2023' , creditHours: 3},
    { course: 'DCIT 203', grade: 'N/A', semester: 'First 2023', creditHours: 3 },
    { course: 'DCIT 205', grade: 'A', semester: 'First 2023' , creditHours: 3},
    { course: 'DCIT 207', grade: 'B', semester: 'First 2023', creditHours: 3 },
    { course: 'MATH 223', grade: 'A', semester: 'First 2023', creditHours: 3 },
    { course: 'CBAS 210', grade: 'B+', semester: 'First 2023', creditHours: 3 },
  ]);

  const findMissingGrades = () => {
    const missingGrades = gradeReport.filter((grade) => grade.grade === 'N/A');
    return missingGrades;
  };

  const missingGrades = findMissingGrades();

  return (
    <div>
      <MyNavbar />
      
      

    
    <div className="container main mt-5">
      <h1 className="mb-4">Dashboard</h1>

      <div className="mb-4">
        <h2>Current Grades Overview</h2>
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
            {gradeReport.map((grade, index) => (
              <tr key={index}>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
                <td>{grade.semester}</td>
                <td>{grade.creditHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Alerts</h2>
        {missingGrades.length > 0 ? (
          <div className="alert alert-warning" role="alert">
            <p>You have missing grades for the following courses:</p>
            <ul>
              {missingGrades.map((missingGrade, index) => (
                <li key={index}>{missingGrade.course}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div  className="alert alert-success" role="alert">
            <p>No missing grades. Good job!</p>
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default Dashboard;