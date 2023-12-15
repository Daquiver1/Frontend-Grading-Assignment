import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';

const Report = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [errors, setErrors] = useState({
    expectedGradeError: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const expectedGrade = parseFloat(formData.expectedGrade);
    if (expectedGrade < 0 || expectedGrade > 100 || isNaN(expectedGrade)) {
      setErrors({ expectedGradeError: 'Expected grade must be a number between 0 and 100.' });
      return;
    } else {
      setErrors({ expectedGradeError: '' });
    }

    console.log('Form Submitted:', formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        courseName: '',
        instructorName: '',
        expectedGrade: '',
        explanation: '',
      });
    }, 3000);
  };

  return (
    <div className="report-grade-page">
      <Header />
      <div className="custom-missing-grade-form-container">
        <h2>Report Missing Grade</h2>
        {isSubmitted && (
            <div className="custom-confirmation-message">
              <FaCheckCircle className="custom-icon" />
              <p>Your report has been successfully sent!</p>
            </div>
          )}
        <form onSubmit={handleSubmit}>
          <div className="custom-form-group">
            <label htmlFor="courseName" className="custom-label">Course Name</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="custom-input"
              required
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="instructorName" className="custom-label">Instructor Name</label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              className="custom-input"
              required
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="expectedGrade" className="custom-label">Expected Grade</label>
            <input
              type="text"
              id="expectedGrade"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              className="custom-input"
              required
            />
            {errors.expectedGradeError && (
              <p className="custom-error-message">{errors.expectedGradeError}</p>
            )}
          </div>
          <div className="custom-form-group">
            <label htmlFor="explanation" className="custom-label">Explanation</label>
            <textarea
              id="explanation"
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              className="custom-textarea"
              required
            ></textarea>
          </div>
          <div className="custom-form-group">
            <button type="submit" className="custom-submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
