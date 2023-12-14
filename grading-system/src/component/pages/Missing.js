import React, { useState } from 'react';

const MissingGradeForm = () => {
  const courseOptionsSemester1 = [
    'Office Productivity Tools',
    'Introduction to Computer Science',
    'Algebra and Trigonometry',
    'Vectors and Geometry',
    'Statistics and probability I',
    'Academic Writing',
  ];

  const courseOptionsSemester2 = [
    'DCIT 104',
    'DCIT 102',
    'Vectors and Geometry II',
    'Calculus I',
    'Statistics and Probability II',
    'Critical Thinking',
  ];

  const courseOptionsSemester3 = [
    'DCIT 201',
    'DCIT 203',
    'DCIT 205',
    'DCIT 207',
    'Math 223',
    'CBAS',
  ];

  const expectedGradeOptions = ['A', 'B', 'C', 'D', 'F'];

  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Grade report submitted for ${courseName} with expected grade ${expectedGrade}. Thank you!`
    );

    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <div style={styles.container}>
      <h2>Report Missing Grade</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="courseName">Course Name:</label>
        <select
          id="courseName"
          name="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        >
          <option value="" disabled>-- Select Course --</option>
          {courseOptionsSemester1.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
          {courseOptionsSemester2.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
          {courseOptionsSemester3.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <label htmlFor="instructorName">Instructor Name:</label>
        <input
          type="text"
          id="instructorName"
          name="instructorName"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          required
        />

        <label htmlFor="expectedGrade">Expected Grade:</label>
        <select
          id="expectedGrade"
          name="expectedGrade"
          value={expectedGrade}
          onChange={(e) => setExpectedGrade(e.target.value)}
          required
        >
          <option value="" disabled>-- Select Grade --</option>
          {expectedGradeOptions.map((grade, index) => (
            <option key={index} value={grade}>
              {grade}
            </option>
          ))}
        </select>

        <label htmlFor="explanation">Explanation:</label>
        <textarea
          id="explanation"
          name="explanation"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default MissingGradeForm;
