// DashboardPage.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const DashboardPage = () => {
  // Dummy data for grade summary
  const gradeSummaryData = [
    { course: 'Math 101', semester: 'Spring 2023', grade: 'A' },
    { course: 'Physics 201', semester: 'Spring 2023', grade: 'B+' },
    { course: 'History 101', semester: 'Fall 2022', grade: 'A-' },
    // Add more courses as needed
  ];

  // Dummy data for missing grades
  const missingGradesData = [
    { course: 'Chemistry 202', semester: 'Spring 2023' },
    // Add more missing courses as needed
  ];

  return (
    <div className="container mx-auto my-8">
      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <ul className="flex">
            <li className="mr-4"><a href="/">Home</a></li>
            <li className="mr-4"><a href="/dashboard">Dashboard</a></li>
            <li className="mr-4"><a href="/grade-report">Grade Report</a></li>
            {/* Add more links for other pages */}
          </ul>
        </div>
      </nav>

      {/* Grade summary table */}
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-semibold mb-4">Grade Summary</h2>
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Course</th>
              <th className="py-2 px-4 border">Semester</th>
              <th className="py-2 px-4 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradeSummaryData.map((data, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{data.course}</td>
                <td className="py-2 px-4 border">{data.semester}</td>
                <td className="py-2 px-4 border">{data.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Missing grades alert section */}
      <div className="max-w-3xl mx-auto bg-yellow-200 p-4 mb-8">
        <h2 className="text-xl font-semibold mb-2">Missing Grades Alert</h2>
        <ul>
          {missingGradesData.map((data, index) => (
            <li key={index} className="mb-2">
              <strong>{data.course}</strong> - {data.semester}
            </li>
          ))}
        </ul>
      </div>

      {/* Grade Report Page link */}
      <div className="text-center">
        <a href="/grade-report" className="text-blue-500 underline">View Detailed Grade Report</a>
      </div>
    </div>
  );
};

export default DashboardPage;
