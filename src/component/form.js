// GradeForm.js
import React, { useState } from 'react';
import './form.css';
import Modal from './modal';

const GradeForm = () => {
  const [courseCode, setCourseCode] = useState('');
  const [missingGrade, setMissingGrade] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const gradeOptions = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'E', 'F'];
  const codeOptions = ['MATH 121', 'MATH 123','MATH 122','MATH 126','DCIT 104','DCIT 102' ,'DCIT 101', 'DCIT 103', 'UGRC 150', 'UGRC 110', 'STAT 111', 'STAT 112'];
  
 

  const validateForm = () => {
    const newErrors = {};

    if (!courseCode.trim()) {
      newErrors.courseCode = 'Course code is required.';
    }

    if (!missingGrade) {
      newErrors.missingGrade = 'Missing grade is required.';
    } else if (!gradeOptions.includes(missingGrade.toUpperCase())) {
      newErrors.missingGrade = 'Please select a valid grade.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Form submitted:', { courseCode, missingGrade, reason });
      setSubmitted(true);
      setCourseCode('');
      setMissingGrade('');
      setReason('');
    }
  };

  const handleReset = () => {
    setCourseCode('');
    setMissingGrade('');
    setReason('');
    setSubmitted(false);
    setErrors({});
  };

  const handleCloseModal = () => {
    setSubmitted(false);
  };

  return (
    <div className="grade-form-container">
      <h1>Missing Grade Form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="courseCode">Course Code:</label>
              <select
                id="courseCode"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                required
              >
                <option value="">Select Course Code</option>
                {codeOptions.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              {errors.courseCode && <span className="error">{errors.courseCode}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="missingGrade">Missing Grade:</label>
              <select
                id="missingGrade"
                value={missingGrade}
                onChange={(e) => setMissingGrade(e.target.value)}
                required
              >
                <option value="">Select Grade</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {errors.missingGrade && <span className="error">{errors.missingGrade}</span>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason (optional):</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              cols={40}
              maxLength={150} // Example character limit
            />
            <div className="char-count">{reason.length}/150 characters</div>
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      ) : (
        <Modal onClose={handleCloseModal}>
          <div className="success-message">
            <p>Your missing grade form has been submitted. Thank you!</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GradeForm;
