import React, { useState } from 'react';
import './InstructorContactPage.css';
import logo from './images/logo.png';
import picture from '../components/images/picture.jpeg'
const InstructorContactPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentID: '',
    message: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="instructor-container">
      
      <img
        id="logo"
        src={logo}
        alt="School Logo"
        className="logo"
      />

      {/* Student Contact Form */}
      <form className="form" onSubmit={handleSubmit}>
        <h2>Contact Instructor</h2>

        <label htmlFor="studentName" className="label">
          Student Name:
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          className="input"
        />

        <label htmlFor="studentID" className="label">
          Student ID:
        </label>
        <input
          type="text"
          id="studentID"
          name="studentID"
          value={formData.studentID}
          onChange={handleChange}
          required
          className="input"
        />

        <label htmlFor="message" className="label">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="textarea"
        ></textarea>

        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      
      <div className="instructor-info">
        <img
          src={picture}
          alt="Instructor"
          className="instructor-image"
        />

        <div>
          <h3>DAQUIVER</h3>
          <ul className="contact-details">
            <li>Email: <a href="mailto:instructor@email.com">instructor@email.com</a></li>
            <li>Phone: 123-456-7890</li>
            <li>Address: Legon, Computer science Department</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorContactPage;