import React, { useState } from 'react';

interface GradeReportPageProps {
  gradeData: Record<string, Record<string, string>>;
}

const GradeReportPage: React.FC<GradeReportPageProps> = ({ gradeData }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);

  // Additional example courses and grades
  const exampleCourses = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'English',
    'History',
    'Art',
    'Computer Science',
    'Biology',
    'Geography',
    'Physical Education',
    'Spanish',
    'Economics',
    'Music',
    'Political Science',
    'Psychology',
  ];

  const exampleGrades = ['A', 'B', 'C', 'A', 'B', 'A-', 'B+', 'A', 'B', 'C', 'B+', 'A-', 'B', 'C', 'A'];

  const exampleCoursesAndGrades: Record<string, string> = {};
  exampleCourses.forEach((course, index) => {
    exampleCoursesAndGrades[course] = exampleGrades[index];
  });

  const getSelectedGradeData = () => {
    const selectedSemesterKey = selectedYear && selectedSemester ? `${selectedYear}${selectedSemester}` : null;

    if (selectedSemesterKey && gradeData[selectedSemesterKey]) {
      return gradeData[selectedSemesterKey];
    }

    return exampleCoursesAndGrades; // Default to example data if no specific semester is selected
  };

  const selectedGradeData = getSelectedGradeData();

  return (
    <div>
      <h2>Grade Report</h2>
      {/* Filtering options */}
      <label htmlFor="yearFilter">Filter by Year:</label>
      <select
        id="yearFilter"
        onChange={(e) => setSelectedYear(e.target.value)}
        value={selectedYear || ''}
      >
        <option value="">All Years</option>
        <option value="1">Year 1</option>
        <option value="2">Year 2</option>
        <option value="3">Year 3</option>
      </select>

      <label htmlFor="semesterFilter">Filter by Semester:</label>
      <select
        id="semesterFilter"
        onChange={(e) => setSelectedSemester(e.target.value)}
        value={selectedSemester || ''}
      >
        <option value="">All Semesters</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
      </select>

      {/* Display detailed view of all courses and respective grades */}
      <div>
        <h3>All Courses</h3>
        <ul>
          {Object.entries(exampleCoursesAndGrades).map(([course, grade]) => (
            <li key={course}>{`${course}: ${grade}`}</li>
          ))}
        </ul>
      </div>

      {/* Display detailed view of selected year and semester or all semesters */}
      {selectedGradeData && (
        <div>
          <h3>{`Selected Year: ${selectedYear || 'All Years'}, Selected Semester: ${
            selectedSemester || 'All Semesters'
          }`}</h3>
          <ul>
            {Object.entries(selectedGradeData).map(([course, grade]) => (
              <li key={course}>{`${course}: ${grade}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GradeReportPage;
