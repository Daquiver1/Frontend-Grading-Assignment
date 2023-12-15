import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/shared/DashboardLayout';

const GradeReportPage = () => {
  const [semester, setSemester] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [courses, setCourses] = useState([]);

  // For demonstration purposes, simulate course data
  useEffect(() => {
    const simulatedData = [
      { id: 1, name: 'Mathematics', grade: 'A', credits: 3 },
      { id: 2, name: 'English', grade: 'B', credits: 4 },
      { id: 3, name: 'History', grade: 'C', credits: 3 },
      // Add more courses as needed
    ];

    setCourses(simulatedData);
  }, []);

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleAcademicYearChange = (e) => {
    setAcademicYear(e.target.value);
  };

  return (
    <DashboardLayout title={"/Grade Report"}>
      <div className="p-4">
        <form className="mb-4">
          <label htmlFor="semester" className="mr-2">
            Semester:
          </label>
          <select
            id="semester"
            className="border p-2"
            value={semester}
            onChange={handleSemesterChange}
          >
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <label htmlFor="academicYear" className="ml-4 mr-2">
            Academic Year:
          </label>
          <select
            id="academicYear"
            className="border p-2"
            value={academicYear}
            onChange={handleAcademicYearChange}
          >
            <option value="">All</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </form>

        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Grade</th>
              <th className="border px-4 py-2">Credits</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border px-4 py-2">{course.name}</td>
                <td className="border px-4 py-2">{course.grade}</td>
                <td className="border px-4 py-2">{course.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default GradeReportPage;
