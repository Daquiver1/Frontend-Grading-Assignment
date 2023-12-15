import React, { useState } from 'react';

const GradeReport = () => {
  const [selectedYear, setSelectedYear] = useState('all');

  const grades = [
    { course: 'DCIT205', grade: 'A', year: '2023' },
    { course: 'DCIT203', grade: 'B', year: '2023' },
    { course: 'DCIT201', grade: 'B+', year: '2022' },
    { course: 'DCIT207', grade: 'B+', year: '2022' },
    // Add more courses and grades as needed
  ];

  const uniqueYears = Array.from(new Set(grades.map(grade => grade.year)));

  const filteredGrades = selectedYear === 'all' ? grades : grades.filter(grade => grade.year === selectedYear);

  return (
    <div className="min-h-screen">
      <header className="bg-blue-400 text-black text-center py-4">
        <h1 className="text-3xl font-extrabold">Grade Report</h1>
      </header>

      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg p-6 shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-4">All Courses</h2>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Filter by Academic Year:</label>
            <select
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="all">All Years</option>
              {uniqueYears.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Grade Details</h2>

          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Course</th>
                <th className="py-3">Grade</th>
                <th className="py-2 text-right">Academic Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrades.map((grade, index) => (
                <tr key={index}>
                  <td className="py-2">{grade.course}</td>
                  <td className="py-2">{grade.grade}</td>
                  <td className="py-2 text-right">{grade.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GradeReport;

