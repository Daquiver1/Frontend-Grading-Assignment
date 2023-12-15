// src/pages/GradeReportPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const GradeReportPage = () => {
  const [filter, setFilter] = useState('All'); // Default filter value is 'All'

  const gradesData = [
    { id: 1, course: 'CBAS 210', instructor: 'Dr Mark Atta', grade: 'A', semester: '1st' },
    { id: 2, course: 'DCIT 201', instructor: 'DR. Elon Musk', grade: 'B+', semester: '1st' },
    { id: 3, course: 'DCIT 203', instructor: 'Dr. Aziz', grade: 'A-', semester: '1st' },
    { id: 4, course: 'DCIT 205', instructor: 'Dr. Soli', grade: 'A', semester: '1st' },
    { id: 5, course: 'DCIT 207', instructor: 'Dr. Gates', grade: 'A-', semester: '1st' },
    { id: 6, course: 'MATH 223', instructor: 'Dr. Sehba', grade: 'A+', semester: '1st' },
    
    // Add more data as needed
  ];

  const filteredGrades =
    filter === 'All' ? gradesData : gradesData.filter((grade) => grade.semester === filter);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Grade Report</h1>
          <p className="text-lg text-gray-600">View a detailed report of all courses and their respective grades.</p>
        </section>

        <div className="mb-4 flex items-center justify-center">
          <label className="mr-4 text-gray-600">Filter by Semester:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="All">All</option>
            <option value="Fall 2023">1st Semester 2023</option>
            <option value="Spring 2024">2nd Semester 2023</option>
            <option value="Summer 2024">1st Semester 2024</option>
            <option value="Winter 2024">2nd Semester 2024</option>
          </select>
        </div>

        <section>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="p-3 border">Course</th>
                <th className="p-3 border">Instructor</th>
                <th className="p-3 border">Grade</th>
                <th className="p-3 border">Semester</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrades.map((grade) => (
                <tr key={grade.id}>
                  <td className="p-3 border">{grade.course}</td>
                  <td className="p-3 border">{grade.instructor}</td>
                  <td className="p-3 border">{grade.grade}</td>
                  <td className="p-3 border">{grade.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <section>
            <p className='text-2xl font-bold mb-4 text-teal-700'>Can't find your grades? click here</p>
          <Link to="/MissingGradeReport">
          <button className="bg-indigo-500  py-3 rounded-md hover:bg-indigo-700 md:flex md:justify-between md:items-center sm:px-12 px-7">Missing Grades</button>
        </Link>
        </section>
        </section>
      </div>
      <Footer/>
    </div>
    
  );
};

export default GradeReportPage;
