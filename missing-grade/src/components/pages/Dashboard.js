import React, { useState, useEffect } from 'react';

function Dashboard  () {
  const [currentGrades, setCurrentGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);

  const mockCurrentGrades = [
    { course: 'Introduction to Computer Science', grade: 'C' },
    { course: 'Statisitcs And Probability', grade: 'A' },
    { course: 'Programming Fundamentals', grade: 'B+' },
    { course: 'Economics', grade: 'C+' },
    { course: 'Academic Writing 1', grade: 'B+' },
    { course: 'Calculus 1', grade: 'N/A' },
    { course: 'Critical Thinking and Practical Reasoning', grade: 'N/A' },
    
  ];

  const mockMissingGrades = [
    { course: 'Calculus 1', instructor: 'Mr Smith' },
    { course: 'Critical Thinking and Practical Reasoning', instructor: 'Dr Ofori' },
    
    
  ];

  useEffect(() => {

    setCurrentGrades(mockCurrentGrades);
    setMissingGrades(mockMissingGrades);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>

      <div className="row">
        <div className="col-md-6 text-success">
          <h4>Current Grades</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {currentGrades.map((grade, index) => (
                <tr key={index}>
                  <td>{grade.course}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
     <div className="col-md-6 text-danger">
          <h4>Missing Grades</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              {missingGrades.map((missingGrade, index) => (
                <tr key={index}>
                  <td>{missingGrade.course}</td>
                   <td> {missingGrade.instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       </div>
       </div>
  );
};

export default Dashboard;
