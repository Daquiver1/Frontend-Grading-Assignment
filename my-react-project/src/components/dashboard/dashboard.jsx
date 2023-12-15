import React, { useState, useEffect } from 'react';


function Dashboard() {
  <div></div>
  const [grades, setGrades] = useState([
    { subject: 'CBAS 210', grade: 'A' },
    { subject: 'DCIT 201', grade: 'B+' },
    { subject: 'DCIT 203', grade: 'A' },
    { subject: 'DCIT 205', grade: 'N/A' },
    { subject: 'DCIT 207', grade: 'N/A' },
    { subject: 'MATH 223', grade: 'N/A' },
  ]);

  const [missingGrades, setMissingGrades] = useState([]);

  useEffect(() => {
    const missing = grades.filter(grade => grade.grade === 'N/A');
    setMissingGrades(missing);
  }, [grades]);

  return (
    <div className="dash">    
    <div className="bg-white p-4">
      

      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4">DASHBOARD</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Grades for Current Semester</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b">Subject</th>
                  <th className="border-b">Grade</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{grade.subject}</td>
                    <td className="py-2">{grade.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            {missingGrades.length > 0 && (
              <div className="mb-4">
                <p className="font-semibold mb-2">You have missing grades for the following subjects:</p>
                <ul>
                  {missingGrades.map((grade, index) => (
                    <li key={index}>{grade.subject}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Go to Login</button>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Dashboard;