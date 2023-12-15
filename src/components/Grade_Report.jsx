import React, { useState, useEffect } from 'react';

const Grade_Report = () => {
  const initialGrades = [
    { subject: 'Math 121', grade: 'A', gpa: 4.0 },
    { subject: 'DCIT 103', grade: 'B', gpa: 3.0 },
    { subject: 'DCIT 101', grade: 'C', gpa: 2.0 },
    { subject: 'STAT 111', grade: 'A', gpa: 4.0 },
    { subject: 'MATH 123', grade: 'F', gpa: 3.0 },
    // Add more subjects and grades as needed
  ];

  const [grades, setGrades] = useState(initialGrades);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGPA, setTotalGPA] = useState(0);

  useEffect(() => {
    // Calculate total GPA and credits
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach((grade) => {
      totalPoints += grade.gpa;
      totalCredits += 1; // Assuming each subject has 1 credit, adjust as needed
    });

    const calculatedGPA = totalPoints / totalCredits;
    setTotalGPA(calculatedGPA);
    setTotalCredits(totalCredits);
  }, [grades]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Grade Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Grade</th>
            <th className="py-2 px-4 border-b">GPA</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{grade.subject}</td>
              <td className="py-2 px-4 border-b">{grade.grade}</td>
              <td className="py-2 px-4 border-b">{grade.gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-lg font-semibold">Additional Information:</p>
        <p className="mt-2">Total Credits: {totalCredits}</p>
        <p>GPA: {totalGPA.toFixed(2)}</p>
      </div>
      <div className="mt-8">
        <p className="text-lg font-semibold">How to Check Your GPA:</p>
        <ol className="list-decimal ml-6">
          <li>Log in to the student portal on the school's website.</li>
          <li>Find the "Grade Report" or "Transcript" section.</li>
          <li>Locate your cumulative GPA or GPA for the current semester.</li>
          <li>If you have any questions, contact the registrar's office.</li>
        </ol>
      </div>
    </div>
  );
};


export default Grade_Report