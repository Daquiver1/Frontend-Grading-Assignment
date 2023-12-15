import React from 'react';

const GradeReport = () => {
  const data1 = [
    { courseCode: 'DCIT101', courseName: 'Introduction to Computer Science', year: '1', semester: 'Fall', grade: 'A' },
    { courseCode: 'MATH122', courseName: 'Calculus I', year: '1', semester: 'Fall', grade: 'X' },
    { courseCode: 'MATH223', courseName: 'Calculus II', year: '2', semester: 'Spring', grade: 'B' },
    { courseCode: 'DCIT102', courseName: 'Introduction to Computer Science II', year: '1', semester: 'Fall', grade: 'A' },
    { courseCode: 'DCIT201', courseName: 'Programming I', year: '2', semester: 'Spring', grade: 'B' },
    { courseCode: 'DCIT102', courseName: 'Introduction to Computer Science II', year: '1', semester: 'Fall', grade: 'A' },
    { courseCode: 'DCIT205', courseName: 'Web Developmet', year: '2', semester: 'Spring', grade: 'A' },
    // Add more mock data as needed
  ];

  const colors = {
    A: 'bg-green-500/70',
    B: 'bg-blue-700/70',
    C: 'bg-purple-700/70',
    D: 'bg-red-700/90',
    X: 'bg-pink-700/90',
  };

  return (
    <div className="p-8 bg-white rounded-md shadow-md">
      <table className="w-full border-2 shadow-md overflow-hidden cursor-pointer">
        <tr className="text-white bg-gray-700 shadow-md">
          <td className="p-2 px-4">
            <input type="checkbox" />
          </td>
          <td className="font-bold text-lg p-2 px-4">Course Code</td>
          <td className="font-bold text-lg p-2 px-4">Course Name</td>
          <td className="font-bold text-lg p-2 px-4">Year</td>
          <td className="font-bold text-lg p-2 px-4">Semester</td>
          <td className="font-bold text-lg p-2 px-4">Grade</td>
        </tr>
        {data1.map((data, index) => (
          <tr key={index} className="hover:bg-[#0000001a]">
            <td className="border-b p-4">
              <input type="checkbox" />
            </td>
            <td className="border-b p-4 ">{data.courseCode}</td>
            <td className="border-b p-4 text-green-500">{data.courseName}</td>
            <td className="border-b p-4">
              <p className="w-2/3 text-center shadow-sm rounded p-1 border">L {data.year}</p>
            </td>
            <td className="border-b p-4">
              <p className={'w-2/3 text-center shadow-sm rounded p-1 border'}>{data.semester}</p>
            </td>
            <td className="border-b p-4">
              <p
                className={
                  'w-2/3 text-center shadow-sm rounded p-1 border text-white ' + `${colors[data.grade[0]]}`
                }
              >
                {data.grade}
              </p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default GradeReport;
