import React, { useState, useEffect } from 'react';
import CourseList from './CourseList';
import FilterOptions from './FilterOptions';
import './CSS/report.css'

const Report = () => {

    const [courses, setCourses] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('');

  
  useEffect(() => {
   
    const fetchedCourses = [
      { id: 1, name: 'Math', grade: 'A', semester: 'first semsester' },
      { id: 3, name: 'History', grade: 'B', semester: 'second semester' },
      { id: 4, name: 'French', grade: 'A', semester: 'second semester' },
     
     
    ];

    const uniqueSemesters = [...new Set(fetchedCourses.map((course) => course.semester))];
    setCourses(fetchedCourses);
    setSemesters(uniqueSemesters);
  }, []);

  const handleFilterChange = (selectedValue) => {
    setSelectedSemester(selectedValue);
  };

  
  const filteredCourses =
    selectedSemester === ''
      ? courses
      : courses.filter((course) => course.semester === selectedSemester);
    return ( 

        <div className='report'>
        <h1>Grade Report</h1>
        <FilterOptions
          semesters={semesters}
          selectedSemester={selectedSemester}
          onFilterChange={handleFilterChange}
        />

        <CourseList courses={filteredCourses} />
      </div>
     );
}
 
export default Report;