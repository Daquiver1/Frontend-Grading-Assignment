import React, { useState } from 'react';

const GradeReportPage = () => {
  const coursesData = {
    year1: {
      firstSemester: [
        { course: 'Econs 101', grade: ':   D' },
        { course: 'DCIT 101',  grade: ':   B' },
        { course: 'DCIT 105',  grade: ':   C+' },
        { course: 'DCIT 103',  grade: ':   B+' },
        { course: 'STAT 111',  grade: ':   B' },
        { course: 'UGRC 110',  grade: ':   B+' }
      ],
      secondSemester: [
        { course: 'DCIT 102', grade: ':   A' },
        { course: 'DCIT 104', grade: ':   D' },
        { course: 'STAT 122', grade: ':   B' },
        { course: 'MATH 122', grade: ':   E' },
        { course: 'ECON 102', grade: ':   D' },
        { course: 'UGBS 104', grade: ':   C' }
      ]
    },
    year2: {
      firstSemester: [
        { course: 'DCIT 201', grade: ':   n/a' },
        { course: 'DCIT 203', grade: ':   n/a' },
        { course: 'DCIT 205', grade: ':   n/a' },
        { course: 'DCIT 207', grade: ':   n/a' },
        { course: 'DCIT 209', grade: ':   n/a' }
      ],
      secondSemester: [
        { course: 'COURSE N/A', grade: ':   n/a' },
        { course: 'COURSE N/A', grade: ':   n/a' },
        { course: 'COURSE N/A', grade: ':   n/a' },
        { course: 'COURSE N/A', grade: ':   n/a' },
        { course: 'COURSE N/A', grade: ':   n/a' }
      ]
    }
  };

  const [selectedYear, setSelectedYear] = useState('year1');
  const [selectedSemester, setSelectedSemester] = useState('firstSemester');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const renderCourses = (selectedYear, selectedSemester) => {
    const courses = coursesData[selectedYear][selectedSemester];
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className=' text-4xl text-left font-bold'>Course  - </th>  
              <th className='font-bold text-4xl text-right ml-7'>- Grade</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td className='font-bold'>{course.course}</td>
               <td style={{ paddingLeft: '50px', paddingRight: '20px' }} className='font-bold'>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ); 
  };

  return (
    <div style={{ background: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h1 className="mb-5 text-5xl font-bold text-gray-700 dark:text-[#788480] group-hover:text-white bg-black py-3 px-6 rounded-md text-center transition-colors duration-300 hover:text-white cursor-pointer">Grade Report</h1>
      <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
        <label htmlFor="yearSelect">Select Year:</label>
        <select id="yearSelect" onChange={handleYearChange} value={selectedYear}>
          <option value="year1">Year 1</option>
          <option value="year2">Year 2</option>
        </select>
        <label htmlFor="semesterSelect">Select Semester:</label>
        <select id="semesterSelect" onChange={handleSemesterChange} value={selectedSemester}>
          <option value="firstSemester">1st Semester</option>
          <option value="secondSemester">2nd Semester</option>
        </select>
      </div>
      {renderCourses(selectedYear, selectedSemester)}
    </div>
  );
};

export default GradeReportPage;