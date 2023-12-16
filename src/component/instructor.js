import React, { useState } from 'react';
import './instructor.css'; 

const InstructorContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send an email to the instructor)
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="instructor-contact">
      {/* Existing content */}
      {/* ... */}
      
      {/* Contact Form */}
      <div className="contact-form">
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              cols={40}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Calendar Integration */}
      <div className="calendar-integration">
        <h3>Schedule an Appointment</h3>
        <p>Placeholder for calendar integration goes here.</p>
        {/* Add calendar integration functionality or placeholder */}
      </div>
    </div>
  );
};

export default InstructorContact;
