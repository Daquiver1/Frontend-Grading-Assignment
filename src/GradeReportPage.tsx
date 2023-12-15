import React, { useState } from 'react';
import './GradeReportPage.css'
import 'bootstrap/dist/css/bootstrap.css'



const GradeReportPage: React.FC = () => {
  // data for grade reports
  const gradeReports = [
    { semester: 'First Semester', courses: [{ name: 'Biology', grade: 'A' }, { name: 'Chemistry', grade: 'B+' }] },
    { semester: 'Second Semester', courses: [{ name: 'Mathematics', grade: 'A-' }, { name: 'History', grade: 'B' }] },
    
  ];

  // State to track selected semester filter
  const [selectedSemester, setSelectedSemester] = useState('');

  const handleSemesterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="grade-report-page">
      <h2 className="page-title">Grade Report</h2>
      <div className="filter-section">
        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select id="semesterFilter" value={selectedSemester} onChange={handleSemesterChange}>
          <option value="">All Semesters</option>
          {gradeReports.map((report, index) => (
            <option key={index} value={report.semester}>{report.semester}</option>
          ))}
        </select>
      </div>
      <div className="grade-details">
        {gradeReports
          .filter(report => selectedSemester === '' || report.semester === selectedSemester)
          .map((report, index) => (
            <div key={index} className="semester-report">
              <h3>{report.semester}</h3>
              {report.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="course-grade-item">
                  <span>{course.name}: </span>
                  <span>{course.grade}</span>
                </div>
              ))}
            </div>
        ))}
      </div>
    </div>
  );
};

export default GradeReportPage;