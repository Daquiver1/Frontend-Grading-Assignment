import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const GradeReport = () => {
  // Dummy data for courses and grades
  const gradeData = [
    { course: 'Mathematics', grade: 95, semester: '1st Sem 2023' },
    { course: 'Science', grade: 85, semester: '1st Sem 2023' },
    { course: 'History', grade: 70, semester: '2nd Sem 2023' },
    { course: 'English', grade: 90, semester: '2nd Sem 2023' },
    // Add more courses and grades as needed
  ];

  // Extract unique semesters for filtering
  const semesters = [...new Set(gradeData.map((data) => data.semester))];

  const [selectedSemester, setSelectedSemester] = useState('All');

  // Filter grades by selected semester
  const filteredGrades = selectedSemester === 'All' ? gradeData : gradeData.filter((data) => data.semester === selectedSemester);


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
        <h1 className="text-3xl font-bold mb-4">Grade Report</h1>

        {/* Semester filter */}
        <div className="mb-4">
          <label htmlFor="semester" className="block text-sm font-semibold mb-2">Filter by Semester:</label>
          <select
            id="semester"
            className="border border-gray-300 rounded px-3 py-2"
            onChange={(e) => setSelectedSemester(e.target.value)}
            value={selectedSemester}
          >
            <option value="All">All</option>
            {semesters.map((semester, index) => (
              <option key={index} value={semester}>{semester}</option>
            ))}
          </select>
        </div>

        {/* Grade report table */}
        <div className="bg-white shadow-md rounded-lg xm:overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Course</th>
                <th className="py-2 px-4 text-left">Grade</th>
                <th className="py-2 px-4 text-left">Semester</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrades.map((data, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{data.course}</td>
                  <td className="py-2 px-4">{data.grade}</td>
                  <td className="py-2 px-4">{data.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className=' -mt-24'>
        <Footer />
      </div>
    </div>
  );
};

export default GradeReport;
