import React, { useState } from 'react';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='missing-grade'>
      <img src="https://cdn-icons-png.flaticon.com/128/8888/8888205.png" alt="" />
      <h1>Missing Grade Form</h1>
      {submitted ? (
        <p>Thank you for reporting the missing grade! We will look into it.</p>
      ) : (
        <form onSubmit={handleSubmit}>
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
          <br />
          <label>
            Instructor Name:
            <input
              type="text"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Expected Grade:
            <input
              type="text"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Explanation:
            <textarea
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default MissingGradeForm;
