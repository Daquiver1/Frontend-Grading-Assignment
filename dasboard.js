import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'; 
import 'tailwindcss/tailwind.css'; 


const Dashbaoard = () => {
    const studentGrades = [
        { subject: 'Math', grade: 'A' },
        { subject: 'Science', grade: 'B' },
        { subject: 'English', grade: 'C' },
        // Add more subjects and grades as needed
      ];
    
      const missingGrades = [
        { subject: 'History' },
        // Add more missing subjects as needed
      ];
    
      return (
        <div className="dashboard-container">
          <div className="grades-container">
            <h1 className="text-4xl font-bold mb-4">Student's Current Grades</h1>
            <ul className="list-disc list-inside text-gray-800">
              {studentGrades.map((grade, index) => (
                <li key={index}>{`${grade.subject}: ${grade.grade}`}</li>
              ))}
            </ul>
          </div>
          <div className="alerts-container">
            <h1 className="text-4xl font-bold mb-4">Missing Grades Alerts</h1>
            {missingGrades.length === 0 ? (
              <p className="text-green-600">No missing grades. Great job!</p>
            ) : (
              <ul className="list-disc list-inside text-red-600">
                {missingGrades.map((missingGrade, index) => (
                  <li key={index}>{`${missingGrade.subject} - Missing Grade`}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
}
 
export default Dashbaoard;