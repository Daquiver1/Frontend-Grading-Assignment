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
      { id: 1, name: 'Quantum Physics', grade: 'A', semester: 'first semsester' },
      { id: 3, name: 'French', grade: 'B', semester: 'second semester' },
      { id: 4, name: 'Comm skills', grade: 'A', semester: 'second semester' },
     
     
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
        <h1>Assessment Report</h1>
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