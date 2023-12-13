import React, { useState } from 'react';
import Footer from './FooterCode'; 
import './MissingGradeForm.css';

const MissingGradeFormPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentID: '',
    email: '',
    courseName: '',
    instructorName: '',
    assignmentTitle: '',
    assignmentDate: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
      <div className="missing-grade-form-container">
      <h2>Missing Grade Report Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Student Information */}
        <div className="form-section">
          <label>Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <label>Student ID:</label>
          <input
            type="text"
            name="studentID"
            value={formData.studentID}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Course Details */}
        <div className="form-section">
          <label>Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <label>Instructor Name:</label>
          <input
            type="text"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Missing Grade Information */}
        <div className="form-section">
          <label>Assignment/Exam Title:</label>
          <input
            type="text"
            name="assignmentTitle"
            value={formData.assignmentTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <label>Date of Assignment/Exam:</label>
          <input
            type="date"
            name="assignmentDate"
            value={formData.assignmentDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <label>Reason for Missing Grade:</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* File Upload - You can add this later if needed */}
        
        {/* Submit Button */}
        <div className="form-section">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <Footer />
    </div>
    
  );
};

export default MissingGradeFormPage;
