import React from 'react';

const Dashboard = () => {
  const grades = [
    { subject: 'DCIT205', grade: 'A' },
    { subject: 'DCIT201', grade: 'B' },
    { subject: 'DCIT203', grade: 'B' },
    { subject: 'DCIT207', grade: 'A'},

  ];

  const missingGrades = grades.filter(grade => grade.grade === null);

  return (
    <div className="bg-oldlace min-h-screen">
      <header className="bg-blue-400 text-black text-center py-4">
        <h1 className="text-3xl font-extrabold">Student Dashboard</h1>
        <p>Welcome to the dashboard! You're now authenticated.</p>
      </header>

      <div className="container mx-auto p-6">
        <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Current Grades</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2">Subject</th>
                  <th className="py-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade, index) => (
                  <tr key={index}>
                    <td className="py-2">{grade.subject}</td>
                    <td className="py-2">{grade.grade || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Missing Grades</h2>
            {missingGrades.length > 0 ? (
              <div className="bg-vivaciouspink border border-vivaciouspink text-white px-4 py-3 rounded mb-4" role="alert">
                <strong className="font-bold">Missing Grades:</strong>
                <ul className="list-disc pl-6">
                  {missingGrades.map((grade, index) => (
                    <li key={index}>{grade.subject}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-from-blue-500-600 font-semibold">No missing grades. Keep up the good work!</p>
            )}
          </div>
        </section>

        <section className="my-8 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Encouragement Section</h2>
          <p className="text-vivaciouspink font-semibold">No missing grades. Keep up the good work!</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
