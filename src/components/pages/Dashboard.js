import React from 'react';
import Footer from './Footer';

function Dashboard() {
  // Sample data for current grades and missing grades
  const currentGrades = [
    { id: 2, course: 'Programming 1', grade: 'A' },
    { id: 3, course: 'Digital and Logical Systems', grade: 'B+' },
    { id: 1, course: 'Web development', grade: 'A' },
    { id: 2, course: 'Computer Organization', grade: 'A' },
    { id: 3, course: 'E-bisiness Archictecture', grade: 'B' },
    // Add more current grades as needed
  ];

  const missingGrades = [
    { id: 4, course: 'Chemistry' },
    // Add more missing grades as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Current Grades</h2>
        <table className="w-full border-collapse border rounded-md mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Course</th>
              <th className="p-2 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            {currentGrades.map((grade) => (
              <tr key={grade.id}>
                <td className="p-2 border">{grade.course}</td>
                <td className="p-2 border">{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Missing Grades</h2>
        {missingGrades.length === 0 ? (
          <p>No missing grades at the moment. Great job!</p>
        ) : (
          <ul className="list-disc pl-6">
            {missingGrades.map((missingGrade) => (
              <li key={missingGrade.id}>{missingGrade.course}</li>
            ))}
          </ul>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;
