import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
  // Dummy data for current grades and missing grades
  const grades = [
    { subject: 'Math', grade: 95 },
    { subject: 'Science', grade: 85 },
    { subject: 'History', grade: 70 },
    { subject: 'English', grade: null }, // Simulating a missing grade
  ];

  // Find missing grades
  const missingGrades = grades.filter(grade => grade.grade === null);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()
  })

  return (
    <div>
      <Navbar />
      <div className="container pt-[100px] h-screen mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Current Grades</h2>
            <div className="grid grid-cols-2 gap-4">
              {grades.map((grade, index) => (
                <div key={index} className="border p-2 rounded">
                  <p className="font-semibold">{grade.subject}</p>
                  <p>{grade.grade !== null ? `${grade.grade}%` : 'Missing grade'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {missingGrades.length > 0 && (
          <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Alerts: Missing Grades</h2>
              <ul>
                {missingGrades.map((missingGrade, index) => (
                  <li key={index} className="mb-2">
                    {missingGrade.subject}
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className=' -mt-24'>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
