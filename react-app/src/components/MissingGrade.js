import React, { useState } from 'react';
import styles from './MissingGradeForm.module.css';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Grade report submitted successfully!');
  };

  return (
    <>
    
    <div className={styles.missingGradeFormContainer}>
      <h1 className={styles.missingGradeFormTitle}>Missing Grade Form Page</h1>
      <form onSubmit={handleSubmit} className={styles.missingGradeForm}>
        <label htmlFor="courseName" className={styles.missingGradeFormLabel}>
          Course Name:
        </label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          required
          className={styles.missingGradeFormInput}
        />

        <label htmlFor="instructorName" className={styles.missingGradeFormLabel}>
          Instructor Name:
        </label>
        <input
          type="text"
          id="instructorName"
          name="instructorName"
          value={formData.instructorName}
          onChange={handleChange}
          required
          className={styles.missingGradeFormInput}
        />

        <label htmlFor="expectedGrade" className={styles.missingGradeFormLabel}>
          Expected Grade:
        </label>
        <input
          type="text"
          id="expectedGrade"
          name="expectedGrade"
          value={formData.expectedGrade}
          onChange={handleChange}
          required
          className={styles.missingGradeFormInput}
        />

        <label htmlFor="explanation" className={styles.missingGradeFormLabel}>
          Explanation:
        </label>
        <textarea
          id="explanation"
          name="explanation"
          value={formData.explanation}
          onChange={handleChange}
          required
          className={styles.missingGradeFormExplanationInput}
        />

        <button type="submit" className={styles.missingGradeFormSubmitButton}>
          Submit
        </button>
      </form>
    </div>
    
    </>
  );
};

export default MissingGradeForm;