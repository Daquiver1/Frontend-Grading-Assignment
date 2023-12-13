import React, { useState } from 'react';
import CourseDetail from './CourseDetail';
import Filter from './Filter';
import "../components-css/Filter.css"
import "../components-css/GR.css"
import "../components-css/CourseD.css"


const GradeReport = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  // Sample data for enrolled courses
  const enrolledCourses = [
    // Sample course data, you can replace this with your actual data
    {
      id: "DCIT 205",
      name: 'Multimedia and Web Design',
      instructor: 'Mr. Nana Assyne',
      creditHours: 3,
      gradeLetter: 'A',
      gradePercentage: 90,
      assignments: [
        { name: 'Midterm Exam', grade: 92 },
        { name: 'Final Exam', grade: 88 },
        { name: 'Assignment1', grade: 35},
      ],
    },
    {
      id: "DCIT 203",
      name: 'Digital and Logic System Design',
      instructor: 'Mr. Aziz Dwumfuor',
      creditHours: 3,
      gradeLetter: 'B+',
      gradePercentage: 90,
      assignments: [
        { name: 'Midterm Exam', grade: 87 },
        { name: 'Final Exam', grade: 75 },
        { name: 'Assignment1', grade: 30},
      ],
    },
    {
      id: "DCIT 209",
      name: 'E-Business Architecture',
      instructor: 'Mr B.Ghansah',
      creditHours: 3,
      gradeLetter: 'A+',
      gradePercentage: 95,
      assignments: [
        { name: 'Midterm Exam', grade: 93 },
        { name: 'Final Exam', grade: 89 },
        { name: 'Assignment1', grade: 45},
      ],
    },
    {
      id: "DCIT 201",
      name: 'Programming I',
      instructor: 'Mr Paul Ammah',
      creditHours: 3,
      gradeLetter: 'B',
      gradePercentage: 90,
      assignments: [
        { name: 'Midterm Exam', grade: 92 },
        { name: 'Final Exam', grade: 81 },
        { name: 'Assignment1', grade: 37},
      ],
    },
    {
      id: "CBAS",
      name: 'Academic Writing',
      instructor: 'Mr. PBS',
      creditHours: 2,
      gradeLetter: 'N/A Grade Pending',
      gradePercentage: 0,
      assignments: [
       {results:"Missing Grade"}
        
      ],
    },
  ];

  const filteredCourses = enrolledCourses.filter((course) => {
    if (selectedYear && course.year !== selectedYear) {
      return false;
    }
    if (selectedSemester && course.semester !== selectedSemester) {
      return false;
    }
    return true;
  });

  return (
    <div className="grade-report">
      <h1>Grade Report Page</h1>
      <Filter
        selectedYear={selectedYear}
        selectedSemester={selectedSemester}
        onSelectYear={(year) => setSelectedYear(year)}
        onSelectSemester={(semester) => setSelectedSemester(semester)}
      />
      {filteredCourses.map((course) => (
        <CourseDetail key={course.id} course={course} />
      ))}
      <p>Contact the Instructor to find details about the Missing Grade</p>
    </div>
  );
};

export default GradeReport;