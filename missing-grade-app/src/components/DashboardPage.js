import React from 'react';

const Dashboard = () => {
  const studentGrades = [
    { subject: 'DCIT 201', grade: 'A' },
    { subject: 'DCIT 203', grade: 'C' },
    { subject: 'DCIT 207', grade: 'B' },
    { subject: 'CBAS 210', grade: 'B+' },
    { subject: 'DCIT 209', grade: 'C+' },
  ];

  const missingGrades = [
    { subject: 'DCIT 205' },
  ];

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center py-6">
      <h1 className="mb-5 text-5xl font-bold text-gray-700 dark:text-[#788480] group-hover:text-white bg-black py-3 px-6 rounded-md transition-colors duration-300 hover:text-white cursor-pointer inline-block">Dashboard</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6 w-full max-w-screen-lg">
        <h2 className="text-4xl font-bold mb-2">Current Grades</h2>
        <table className="w-full border-collapse border-2">
          <thead>
            <tr>
              <th className="px-6 py-4 border-2">Course Title</th>
              <th className="px-6 py-4 border-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentGrades.map((grade, index) => (
              <tr key={index}>
                <td className="border-2 px-4 py-2">{grade.subject}</td>
                <td className="border-2 px-4 py-2">{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-screen-lg">
        <h2 className="text-4xl font-bold mb-2">Missing Grades</h2>
        {missingGrades.length > 0 ? (
          <ul>
            {missingGrades.map((grade, index) => (
              <li key={index} className="mb-2">
                {grade.subject}
              </li>
            ))}
          </ul>
        ) : (
          <p>No missing grades</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
