import React, { useState } from 'react';
import "./missinggrade.css"

const MissingGrade = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  // State to manage confirmation message
  const [confirmation, setConfirmation] = useState('');

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that all required fields are filled
    if (formData.courseName && formData.instructorName && formData.expectedGrade && formData.explanation) {
      // Display confirmation message
      setConfirmation('Missing grade reported successfully!');
      // You can send the form data to the backend or simulate further actions here
    } else {
      setConfirmation('Please fill in all required fields.');
    }
  };

  return (
    <div>
      <h2>Report Missing Grade</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name *</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="instructorName">Instructor Name *</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expectedGrade">Expected Grade *</label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="explanation">Explanation *</label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {confirmation && <p>{confirmation}</p>}
      </div>
    </div>
  );
};

export default MissingGrade;
