import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const GPABox = () => (
    <div className="bg-blue-200 p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">Current GPA</h2>
      <p className="text-3xl font-bold">3.9</p>
    </div>
  );

  const SubjectsAndGrades = ({ year }) => {
    const semesters = ['Semester 1', 'Semester 2'];
  
    const level100Courses = [
      'UGRC 150 Critical Thinking and Practical Reasoning',
      'MATH 121 Algebra and Trigonometry',
      'MATH 123 Vectors and Geometry',
      'DCIT 101 Introduction to Computer Science',
      'DCIT 103 Office Productivity Tools',
      'STAT 111 Introduction to Statistics and Probability I',
    ];
  
    const level200Courses = [
      'UGRC 110 Academic Writing I',
      'UGRC 131-136 Understanding Human Society',
      'MATH 122 Calculus I',
      'MATH 126 Algebra and Geometry',
      'STAT 112 Introduction to Statistics and Probability II',
      'DCIT 104 Programming',
      'DCIT 102 Computer Hardware Fund. and Circuits',
    ];
  
    const level300Courses = [
      'UGRC 210 Academic Writing II',
      'DCIT 201 Programming I',
      'DCIT 203 Digital and Logic Systems Design',
      'DCIT 205 Multi Media and Web Design',
      'DCIT 207 Computer Architecture & Organisation',
      'DCIT 209 E-Business Architectures',
    ];
  
    const level400Courses = [
      'UGRC 220 Introduction to African Studies',
      'DCIT 202 Mobile Application Development',
      'DCIT 204 Data Structures & Algorithm I',
      'DCIT 206 Systems Administration',
      'DCIT 208 Software Engineering',
      'DCIT 212 Numerical and Computational Methods',
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: 'url("path/to/im3.jpg")', backgroundSize: 'cover' }}>
        <div className='flex'>
       <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{`Year ${year} Subjects and Grades`}</h2>
        {semesters.map((semester, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{semester}</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="p-2 border border-gray-300">Course</th>
                  <th className="p-2 border border-gray-300">Grade</th>
                </tr>
              </thead>
              <tbody>
                {year === '100' && level100Courses.map((course, i) => (
                  <tr key={i}>
                    <td className="p-2 border border-gray-300">{course}</td>
                    <td className="p-2 border border-gray-300">A</td> 
                  </tr>
                ))}
                {year === '200' && level200Courses.map((course, i) => (
                  <tr key={i}>
                    <td className="p-2 border border-gray-300">{course}</td>
                    <td className="p-2 border border-gray-300">B</td> 
                  </tr>
                ))}
                {year === '300' && level300Courses.map((course, i) => (
                  <tr key={i}>
                    <td className="p-2 border border-gray-300">{course}</td>
                    <td className="p-2 border border-gray-300">B+</td> 
                  </tr>
                ))}
                {year === '400' && level400Courses.map((course, i) => (
                  <tr key={i}>
                    <td className="p-2 border border-gray-300">{course}</td>
                    <td className="p-2 border border-gray-300">A</td> 
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 font-bold">Total CGPA: {3.6}</p> 
          </div>
        ))}
      </div>
        </div> 
        </div>


    );
  };

  const LineChart = () => (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Grade Progress Chart</h2>
      <div className="bg-gray-300 p-4 rounded-md">Chart for grades</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700">
      <h1 className="text-4xl font-bold mb-8 mt-0">Student Dashboard</h1>
      <GPABox />
      <h4  className="text-4xl font-bold mb-8 mt-0">Grade Report</h4>
      <div className="mt-8 mb-4">
        <label htmlFor="yearSelect" className="mr-2">
          Select Year:
        </label>
        <select
          id="yearSelect"
          onChange={(e) => handleYearChange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
            
          <option value="">Select Year</option>
          <option value="100">Year 100</option>
          <option value="200">Year 200</option>
          <option value="300">Year 300</option>
          <option value="400">Year 400</option>
        </select>
      </div>
      {selectedYear && <SubjectsAndGrades year={selectedYear} />}
      <LineChart />
    </div>
  );
};

export default Dashboard;
