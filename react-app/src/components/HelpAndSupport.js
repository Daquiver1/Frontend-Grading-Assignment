// HelpAndSupportPage.js
import React, { useState } from 'react';
import './HelpAndSupportPage.css';
import Footer from "./Footer";
import Navbar from './Navbar';

const faqData = [
  {
    id: 1,
    question: 'How often are grades updated?',
    answer: 'Grades are updated at the end of each semester.'
  },
  {
    id: 2,
    question: 'Can I request a grade review?',
    answer: 'Yes, you can request a grade review through the official process. Please contact your academic advisor for more information.'
  },
  // Add more FAQ items as needed
];

const HelpAndSupportPage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleContactFormChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to the server)
    console.log('Contact form submitted:', contactFormData);
    // Reset form fields
    setContactFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
    <Navbar/>
    <div className="help-and-support-container">
      <h1>Help and Support</h1>

      <section className="faq-section">
        <h2 className='name'>Frequently Asked Questions</h2>
        <ul className="faq-list">
          {faqData.map((faq) => (
            <li key={faq.id}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="contact-form-section">
        <h2 className='tech'>Contact Technical Support</h2>
        <form onSubmit={handleSubmitContactForm}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactFormData.name}
            onChange={handleContactFormChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactFormData.email}
            onChange={handleContactFormChange}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={contactFormData.subject}
            onChange={handleContactFormChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={contactFormData.message}
            onChange={handleContactFormChange}
            rows="4"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
<Footer/>
    </>
  );
};

export default HelpAndSupportPage;
