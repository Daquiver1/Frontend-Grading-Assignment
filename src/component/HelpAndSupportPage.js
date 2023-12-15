// ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ formType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send an email or save the message)
    console.log(`${formType} form submitted:`, formData);
    // You may want to reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
