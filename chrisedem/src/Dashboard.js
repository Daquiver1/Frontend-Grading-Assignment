import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Dashboard = () => {
  
  const [students, setStudents] = useState({
    CBAS210: { grade: 'A', missing: false },
    DCIT201: { grade: 'B', missing: false },
    DCIT205: { grade: 'C', missing: true },
    DCIT207: { grade: 'A', missing: false },
    DCIT209: { grade: 'B', missing: true },
    DCIT203: { grade: 'A', missing: false },
  });

  const calculateOverallGrade = () => {
    const grades = Object.values(students).map((student) => student.grade);
    const overallGrade =
      grades.reduce((sum, grade) => sum + parseInt(grade), 0) / grades.length;
    return overallGrade.toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <div className="Dashboard">
        <h1 className="dashboard-heading">Student Dashboard</h1>
        
        <div className="overview">
          <h2>Overview</h2>
          <p>Overall Grade: {calculateOverallGrade()}</p>
          <ul>
            {Object.entries(students).map(([course, { grade, missing }]) => (
              <li key={course}>
                <strong>{course}:</strong> {grade}
                {missing && (
                  <span className="missing-alert"> (Missing Grade)</span>
                )}
              </li>
            ))}
          </ul>
        </div>

   
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
