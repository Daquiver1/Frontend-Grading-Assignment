import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const studentGrades = [
    { subject: 'DCIT 103', grade: 'A', level: 'lv100', semester: 'first' },
    { subject: 'DCIT 101', grade: 'B+', level: 'lv100', semester: 'first' },
    { subject: 'DCIT 102', grade: 'C', level: 'lv100', semester: 'first' },
    { subject: 'UGRC 110', grade: 'B', level: 'lv100', semester: 'second' },
    { subject: 'CBAS 210', grade: 'B+', level: 'lv200', semester: 'first' },
    { subject: 'DCIT 209', grade: 'n/a', level: 'lv200', semester: 'second' },
  ];

  const lv100Grades = studentGrades.filter((grade) => grade.level === 'lv100');
  const lv200Grades = studentGrades.filter((grade) => grade.level === 'lv200');

  const [showLv100, setShowLv100] = useState(false);
  const [showLv200, setShowLv200] = useState(false);

  const missingGrades = [
    { subject: 'DCIT 205' },
  ];

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (missingGrades.length > 0) {
      setShowAlert(true);
    }
  }, [missingGrades]);

  return (
    <div className="bg-white flex flex-col justify-center items-left ">
      <h1 className="mb-5 text-5xl font-bold text-gray-700 dark:text-[#788480] group-hover:text-white bg-black py-3 px-6 rounded-md text-center transition-colors duration-300 hover:text-white cursor-pointer inline-block">Dashboard</h1>

      {showAlert && (
        <div className="mt-0 ml-15 flex space-x-2">
          <div className="alert-icon text-red-500">⚠️</div>
          <div className="alert-message bg-red-100 border border-red-400 text-red-700 px-20 py-2 rounded">
            You have missing grades. Please check your grades!
          </div>
        </div>
      )}

      <div className="bg-white flex flex-col justify-center items-center py-6">
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-3 w-full ">
        <h2 className="text-4xl font-bold mb-2"> Current Grades</h2>
        <div className="flex flex-col">
          <button onClick={() => setShowLv100(!showLv100)} className="items-center justify-between w-full bg-gray-200 rounded-md px-4 py-2 mb-2">
            <span>LV 100</span>
            <span>{showLv100 ? '▲' : '▼'}</span>
          </button>
          {showLv100 && (
            <div className="border border-gray-300 rounded-md mb-4">
              <h3 className="text-xl font-bold bg-gray-200 px-4 py-2">First Semester</h3>
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="px-6 py-4 border">Course Title</th>
                    <th className="px-6 py-4 border">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {lv100Grades.map((grade, index) => grade.semester === 'first' && (
                    <tr key={index}>
                      <td className="border px-4 py-2">{grade.subject}</td>
                      <td className="border px-4 py-2">{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="text-xl font-bold bg-gray-200 px-4 py-2">Second Semester</h3>
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="px-6 py-4 border">Course Title</th>
                    <th className="px-6 py-4 border">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {lv100Grades.map((grade, index) => grade.semester === 'second' && (
                    <tr key={index}>
                      <td className="border px-4 py-2">{grade.subject}</td>
                      <td className="border px-4 py-2">{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <button onClick={() => setShowLv200(!showLv200)} className=" items-center justify-between w-full bg-gray-200 rounded-md px-4 py-2">
            <span>LV 200</span>
            <span>{showLv200 ? '▲' : '▼'}</span>
          </button>
          {showLv200 && (
            <div className="border border-gray-300 rounded-md">
              <h3 className="text-xl font-bold bg-gray-200 px-4 py-2">First Semester</h3>
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="px-6 py-4 border">Course Title</th>
                    <th className="px-6 py-4 border">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {lv200Grades.map((grade, index) => grade.semester === 'first' && (
                    <tr key={index}>
                      <td className="border px-4 py-2">{grade.subject}</td>
                      <td className="border px-4 py-2">{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="text-xl font-bold bg-gray-200 px-4 py-2">Second Semester</h3>
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="px-6 py-4 border">Course Title</th>
                    <th className="px-6 py-4 border">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {lv200Grades.map((grade, index) => grade.semester === 'second' && (
                    <tr key={index}>
                      <td className="border px-4 py-2">{grade.subject}</td>
                      <td className="border px-4 py-2">{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
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
