// DashboardPage.tsx
import React, { useEffect } from 'react';

interface Grade {
  course: string;
  value: string; // This might be a number or a string depending on your data
}

interface DashboardPageProps {
  studentName: string;
  currentGrades: Grade[];
  missingGrades: Grade[];
}

const DashboardPage: React.FC<DashboardPageProps> = ({ studentName, currentGrades, missingGrades }) => {
  // Fabricate data (simulation)
  useEffect(() => {
    const fabricatedCurrentGrades: Grade[] = [
      { course: 'Mathematics', value: 'A' },
      { course: 'Physics', value: 'B' },
      { course: 'Chemistry', value: 'C' },
      { course: 'Biology', value: 'A' },
      { course: 'History', value: 'B' },
      { course: 'Geography', value: 'A' },
      { course: 'Physical Education', value: 'A' },
    ];

    const fabricatedMissingGrades: Grade[] = [
      { course: 'English', value: '' },
      { course: 'French', value: '' },
      { course: 'Art', value: '' },
    ];

    // Simulate updating the state with fabricated data
    // In a real app, you would fetch this data from a backend
    // or another data source and update the state accordingly
    // setMissingGrades(fabricatedMissingGrades);
    // setCurrentGrades(fabricatedCurrentGrades);

    // Alert for missing grades
    if (fabricatedMissingGrades.length > 0) {
      alert('You have missing grades! Please check the Missing Grades section.');
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <h2>Welcome, {studentName}!</h2>

      {/* Display current grades */}
      <h3>Current Grades</h3>
      {currentGrades.length > 0 ? (
        <ul>
          {currentGrades.map((grade) => (
            <li key={grade.course}>{`${grade.course}: ${grade.value}`}</li>
          ))}
        </ul>
      ) : (
        <p>
          
           <p> Mathematics: A</p>
           <p>Physics: B</p>
            <p>Chemistry: C</p>
            <p>Biology: A</p>
            <p>History: B</p>
            <p>Geography: A</p>
            <p>Physical Education: A</p>
          
        </p>
      )}

      {/* Display missing grades with alerts */}
      <h3>Missing Grades</h3>
      {missingGrades.length > 0 ? (
        <ul>
          {missingGrades.map((grade) => (
            <li key={grade.course}>
              {`${grade.course}: ${grade.value}`} {grade.value === '' && <span style={{ color: 'red' }}> - Missing</span>}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <p>ICT: --</p>
            <p>English: --</p>
            <p>Art: --</p>
            <p>French: --</p>
          <p> Missing grades. Contact instructor</p>
        </p>
      )}
    </div>
  );
};

export default DashboardPage;
