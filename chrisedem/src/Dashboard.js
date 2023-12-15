import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {
 
  const [students, setStudents] = useState({
    CBAS210: { grade: 'A', missing: false, percentage: 90 },
    DCIT201: { grade: 'B', missing: false, percentage: 80 },
    DCIT205: { grade: 'C', missing: true, percentage: 70 },
    DCIT207: { grade: 'A', missing: false, percentage: 95 },
    DCIT209: { grade: 'B', missing: true, percentage: 85 },
    DCIT203: { grade: 'A', missing: false, percentage: 92 },
  });

 
  const calculateOverallGrade = () => {
    const grades = Object.values(students).map((student) => student.percentage);
    const overallGrade =
      grades.reduce((sum, percentage) => sum + parseInt(percentage), 0) / grades.length;
    return overallGrade.toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <div className="Dashboard">
        <h1 className="dashboard-heading"  style={{ color: '#35d8f1' }}>Student Dashboard</h1>

        <div className="overview">
          <h2 style={{ color: '#35d8f1' }}>Overview</h2>
          <p>Overall Grade: {calculateOverallGrade()}%</p>
          <ul>
            {Object.entries(students).map(([course, { grade, missing, percentage }]) => (
              <li key={course}>
                <strong>{course}:</strong> {grade} (Percentage: {percentage}%)
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
