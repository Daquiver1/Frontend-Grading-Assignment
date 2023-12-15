import React, { useState } from 'react';
import Footer from './Footer';

const GradeReportPage = () => {
  const [selectedYear, setSelectedYear] = useState('2023'); 
  const [selectedSemester, setSelectedSemester] = useState('first semester'); 
  const [filteredCourses, setFilteredCourses] = useState([ "Dcit203"]); 
  
  const allCourses = [
    { courseName: 'DCIT203', grade: 'A', year: '2023', semester: '1st semester' },
    { courseName: 'DCIT205', grade: 'C', year: '2023', semester: ' 2nd semester' },
    { courseName: 'STAT112', grade: 'B', year: '2023', semester: '3rd semester' },
    { courseName: 'ECONS101', grade: 'A', year: '2023', semester: '4th semester' },
  ];

  // Filter courses based on selected year and semester
  const filterCourses = () => {
    let filtered = allCourses;

    if (selectedYear) {
      filtered = filtered.filter(course => course.year === selectedYear);
    }

    if (selectedSemester) {
      filtered = filtered.filter(course => course.semester === selectedSemester);
    }

    setFilteredCourses(filtered);
  };

  // Handle filter changes
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  // Apply filters when either year or semester changes
  // useEffect(() => {
  //   filterCourses();
  // }, [selectedYear, selectedSemester]);

  return (
    <div className="container report mx-auto p-4 bg-blue-200 bg-opacity-50">
      <h1 className="text-3xl font-bold mb-4">Grade Report</h1>

      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Select Academic Year</label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          onChange={handleYearChange}
          value={selectedYear}
        >
          <option value="">All</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Select Semester</label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          onChange={handleSemesterChange}
          value={selectedSemester}
        >
          
          <option value="">All</option>
          <option value="1st semester">1st semester</option>
          <option value="2nd semester">2nd semester</option>
          <option value="3rd semester">3rd semester</option>
          <option value="4th semester">4th semester</option>
        </select>
      </div>
       
      <div>
        {allCourses.map((course, index) => (
          <div key={index} className="mb-4 flex gap-5 place-items-center">
            <p className="text-lg font-semibold">{course.courseName}</p>
            <p className="text-lg font-semibold">{course.grade}</p>
            <p className="text-lg font-semibold">{course.year}</p>
            <p className="text-lg font-semibold">{course.semester}</p>
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="text-gray-500">No courses found for the selected filters.</p>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GradeReportPage;
