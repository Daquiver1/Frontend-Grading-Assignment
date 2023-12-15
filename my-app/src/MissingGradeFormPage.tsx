// MissingGradeForm.tsx
import React, { useState } from 'react';
import './MissingGradeForm.css'; 

const MissingGradeForm: React.FC = () => {
  // State to manage form fields
  const [studentInfo, setStudentInfo] = useState({
    fullName: '',
    studentID: '',
    courseName: '',
    courseCode: '',
    description: '',
  });

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending data to a server
    console.log('Form submitted:', studentInfo);
    // You can add further actions, such as displaying a confirmation message
  };

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="missing-grade-form">
      <h2>Missing Grade Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={studentInfo.fullName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="studentID">Student ID:</label>
        <input
          type="text"
          id="studentID"
          name="studentID"
          value={studentInfo.studentID}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={studentInfo.courseName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="courseCode">Course Code:</label>
        <input
          type="text"
          id="courseCode"
          name="courseCode"
          value={studentInfo.courseCode}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description of the Issue:</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={studentInfo.description}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeForm;
