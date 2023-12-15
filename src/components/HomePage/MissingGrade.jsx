import React, { useState } from 'react';
import './MissingGradeForm.css';
import Footer from './Footer.js';
import Navbar from '../navigation.js';



const MissingGrade = () => {
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
      
      console.log('Form submitted:', formData);
    };
 
    return (
      <div>
        <Navbar/>
      <div className="missing-grade-form-container">
        <h2>Missing Grade Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="studentName" className='lb'> Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
  
          <label htmlFor="academicLevel" className='lb'>Academic Level:</label>
          <input
            type="text"
            id="academicLevel"
            name="academicLevel"
            value={formData.academicLevel}
            onChange={handleChange}
          />
  
          <label htmlFor="studentID" className='lb'>Student ID:</label>
          <input
            type="text"
            id="studentID"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
          />
  
          <label htmlFor="course" className='lb'>Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
  
          <label htmlFor="modeOfExamination" className='lb'>Mode of Examination:</label>
          <input
            type="text"
            id="modeOfExamination"
            name="modeOfExamination"
            value={formData.modeOfExamination}
            onChange={handleChange}
          />
  
          <label htmlFor="instructorsName" className='lb'>Instructor's Name:</label>
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
        <Footer/>
        </div>
  
      </div>
      </div>
      
    );
  };
  export default MissingGrade;
  