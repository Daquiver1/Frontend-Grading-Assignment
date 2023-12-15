import React, { useState, useEffect } from 'react';
import './MissingGradeReport.css';

const MissingGradeReport = () => {
  const [courseOptions, setCourseOptions] = useState([]);
  const [instructorOptions, setInstructorOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  // Dummy data for the dropdown options (replace it with your actual data)
  const gradeReportData = [
    { courseName: 'STAT 112', instructorName: 'Dr. Richard Minkah' },
    { courseName: 'MATH 122', instructorName: 'Prof. Sehba' },
    { courseName: 'UGRC 110', instructorName: 'Mrs. Welbeck' },
    { instructorName: 'Dr. George Mensah' },
    { instructorName: 'Prof. Emily Johnson' },
    // Add more data as needed
  ];

  useEffect(() => {
    // Get unique course names from the grade report data
    const uniqueCourses = [...new Set(gradeReportData.map(item => item.courseName))];
    setCourseOptions(uniqueCourses);

    // Get unique instructor names from the grade report data
    const uniqueInstructors = [...new Set(gradeReportData.map(item => item.instructorName))];
    setInstructorOptions(uniqueInstructors);
  }, []);

  const handleSubmit = () => {
    // Check if all fields are filled
    if (!selectedCourse || !selectedInstructor || !expectedGrade || !explanation) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Perform any submission logic here
    // For now, display an alert as a confirmation
    alert('Your information has been sent! You will receive feedback as soon as possible. Thank you.');

    // Clear form fields after submission
    setSelectedCourse('');
    setSelectedInstructor('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <div className="missre">
      <div className="mistab">
        <div className="missing-grade-form-container">
          <h2>Report Missing Grade</h2>
          <form>
            <label>
              Course Name:
              <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                <option value="" disabled>Select Course</option>
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </label>

            <label>
              Instructor Name:
              <select value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)}>
                <option value="" disabled>Select Instructor</option>
                {instructorOptions.map((instructor, index) => (
                  <option key={index} value={instructor}>{instructor}</option>
                ))}
              </select>
            </label>

            <label>
              Expected Grade:
              <input type="text" value={expectedGrade} onChange={(e) => setExpectedGrade(e.target.value)} />
            </label>

            <label>
              Explanation:
              <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />
            </label>

            <button type="button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MissingGradeReport;
