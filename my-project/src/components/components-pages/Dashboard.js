import React, { useState, useEffect } from 'react';
import "../components-css/Dash.css";


// Sample student data
const studentData = {
  name: 'John Doe',
  grades: {
    DCIT205: 95,
    DCIT201: 90,
    DCIT209: 78,
    DCIT203: 88,
  },
  missingGrades: ['CBAS'],
};

function DashboardPage() {
  const [studentGrades, setStudentGrades] = useState(studentData.grades);
  const [missingGrades, setMissingGrades] = useState(studentData.missingGrades);

  useEffect(() => {
    // Simulate fetching grades data from an API
    setTimeout(() => {
      setStudentGrades({
        ...studentGrades,
        DCIT205: 92, // Update a grade for demo purposes
      });
      setMissingGrades(['CBAS', 'french']); // Update missing grades for demo
    }, 2000);
  }, [studentGrades]);

  const renderGradeCard = () => {
    return Object.entries(studentGrades).map(([subject, grade]) => (
      <li key={subject}>
        {subject}: {grade}
      </li>
    ));
  };
 

  const renderMissingGradesAlert = () => {
    if (missingGrades.length < 60 ) { // Change 'length > 0' to check for actual data existence
      return (
        <div className="alert alert-warning">
          Missing grades for: {missingGrades.join(', ')}
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="dashboard-container" style={
      {
        
        backgroundImage: 'url(../components-images/gty3.jpg")'
      }
    }> 
      <h1>{studentData.name}'s Dashboard</h1>
      <h2>School Performance</h2>
      <p>Overall GPA: 84.5 (based on current grades)</p>
      <h2>Grades</h2>
      <ul className="grade-card">{renderGradeCard()}</ul>
      {renderMissingGradesAlert()}
    </div>
  );
}

export default DashboardPage;
