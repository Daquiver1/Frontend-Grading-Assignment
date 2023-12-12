// MissingGradeForm.jsx
import React, { useState } from 'react';


const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentID: '',
    courseName: '',
    missingGradeDetails: '',
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
    // You can send the form data to the server or perform other actions here
    // Reset form fields after submission
    setFormData({
      studentName: '',
      studentID: '',
      courseName: '',
      missingGradeDetails: '',
    });
  };

  return (
    <div className="missing-grade-form-container">
      <h1>Missing Grade Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Student ID:
          <input
            type="text"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Missing Grade Details:
          <textarea
            name="missingGradeDetails"
            value={formData.missingGradeDetails}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeForm;
