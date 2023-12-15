import React, { useState } from 'react';
import './HelpandSupport.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';

const HelpAndSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send an email or make an API request)
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Help And Support</h1>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Q:How do I report my grades?</strong>
          <p>A: You can report your grades through the online portal. Navigate to the "Grade Reporting" section and follow the instructions.</p>
        </li>
        <li>
          <strong>Q: What should I do if I encounter an error while reporting grades?</strong>
          <p>A: If you encounter any errors, please contact our technical support team using the contact form below.</p>
        </li>
      </ul>
    <div>
      <h2>Contact Technical Support</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    < Footer />
  </div>
  );
};

export default HelpAndSupport;

