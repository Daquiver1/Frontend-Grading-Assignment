// components/MissingGradeForm/MissingGradeForm.jsx

import React, { useState } from 'react';
import './MissingGradeForm.css';
import NavBar from '../Navbar/NavBar';



const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    academicLevel: '',
    studentID: '',
    course: '',
    modeOfExamination: '',
    instructorsName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="missing-grade-form-container">
      <h2>Missing Grade Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName"> Name:</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
        />

        <label htmlFor="academicLevel">Academic Level:</label>
        <input
          type="text"
          id="academicLevel"
          name="academicLevel"
          value={formData.academicLevel}
          onChange={handleChange}
        />

        <label htmlFor="studentID">Student ID:</label>
        <input
          type="text"
          id="studentID"
          name="studentID"
          value={formData.studentID}
          onChange={handleChange}
        />

        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />

        <label htmlFor="modeOfExamination">Mode of Examination:</label>
        <input
          type="text"
          id="modeOfExamination"
          name="modeOfExamination"
          value={formData.modeOfExamination}
          onChange={handleChange}
        />

        <label htmlFor="instructorsName">Instructor's Name:</label>
        <input
          type="text"
          id="instructorsName"
          name="instructorsName"
          value={formData.instructorsName}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <div> 
        
        <NavBar />
        
    
    </div>



    </div>
    
    
  );
};

export default MissingGradeForm;
