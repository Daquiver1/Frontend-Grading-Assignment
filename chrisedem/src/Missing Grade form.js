import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const GradeReportForm = () => {

  const [formData, setFormData] = useState({
    courseCode: '',
    grade: '',
    percentage: '',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);

    setFormData({
      courseCode: '',
      grade: '',
      percentage: '',
    });
  };

  return (
    <div>
      <Navbar />
      <div className="GradeReportForm">
        <h1>Grade Report Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Course Code:
            <input
              type="text"
              name="courseCode"
              value={formData.courseCode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Grade:
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Percentage:
            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default GradeReportForm;
