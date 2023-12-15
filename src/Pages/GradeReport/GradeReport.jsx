import React from 'react';

const GradeReport = () => {
  const data = [
    { courseCode: 'CS101', courseName: 'Introduction to Computer Science', year: '1', semester: 'Fall', grade: 'A' },
    { courseCode: 'MATH201', courseName: 'Calculus I', year: '1', semester: 'Fall', grade: 'B' },
    { courseCode: 'PHYS101', courseName: 'Physics I', year: '1', semester: 'Fall', grade: 'A' },
    { courseCode: 'PHYS101', courseName: 'Physics I', year: '1', semester: 'Fall', grade: 'X' },
    { courseCode: 'PHYS101', courseName: 'Physics I', year: '1', semester: 'Fall', grade: 'C' },
    { courseCode: 'PHYS101', courseName: 'Physics I', year: '1', semester: 'Fall', grade: 'D' },
    // Add more mock data as needed
  ];

  const gradeColors = {
    A: 'text-green-500',
    B: 'text-blue-500',
    C: 'text-yellow-500',
    D: 'text-purple-500',
    X: 'text-red-500',
  };

  return (
    <div className="p-8 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Grade Report</h2>
      <table className="w-full border-collapse border bg-white shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">#</th>
            <th className="border p-3">Course Code</th>
            <th className="border p-3">Course Name</th>
            <th className="border p-3">Year</th>
            <th className="border p-3">Semester</th>
            <th className="border p-3">Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course, index) => (
            <tr key={index} className={(index + 1) % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border p-3">{index + 1}</td>
              <td className="border p-3">{course.courseCode}</td>
              <td className="border p-3">{course.courseName}</td>
              <td className="border p-3">{course.year}</td>
              <td className="border p-3">{course.semester}</td>
              <td className={`border p-3 ${gradeColors[course.grade]}`}>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReport;
