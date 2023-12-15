// MissingGradeForm.js
import React, { useState } from 'react';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear errors when user starts typing
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.courseName.trim()) {
      errors.courseName = 'Course name is required';
    }
    if (!formData.instructorName.trim()) {
      errors.instructorName = 'Instructor name is required';
    }
    if (!formData.expectedGrade.trim()) {
      errors.expectedGrade = 'Expected grade is required';
    }
    if (!formData.explanation.trim()) {
      errors.explanation = 'Explanation is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      // Simulate form submission (replace with actual API call or form handling logic)
      // For demonstration purposes, just show a confirmation message
      setSubmissionStatus('Grade report submitted successfully!');
    }
  };

  return (
    <div>
      <h1>Missing Grade Form</h1>
      <form>
        <div className="form-group">
          <label>Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
          />
          {formErrors.courseName && <span className="error-message">{formErrors.courseName}</span>}
        </div>

        <div className="form-group">
          <label>Instructor Name:</label>
          <input
            type="text"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
          />
          {formErrors.instructorName && (
            <span className="error-message">{formErrors.instructorName}</span>
          )}
        </div>

        <div className="form-group">
          <label>Expected Grade:</label>
          <input
            type="text"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
          />
          {formErrors.expectedGrade && (
            <span className="error-message">{formErrors.expectedGrade}</span>
          )}
        </div>

        <div className="form-group">
          <label>Explanation:</label>
          <textarea
            name="explanation"
            value={formData.explanation}
            onChange={handleInputChange}
          />
          {formErrors.explanation && (
            <span className="error-message">{formErrors.explanation}</span>
          )}
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {submissionStatus && <p className="confirmation-message">{submissionStatus}</p>}
    </div>
  );
};

export default MissingGradeForm;
