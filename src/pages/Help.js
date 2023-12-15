import React, { useState } from 'react';
import './Help.css';

const faqData = [
  { id: 1, question: 'How do I report a missing grade?', answer: 'By using the missin grade report form.' },
  { id: 2, question: 'Can I change my reported grades?', answer: 'In other to do such a thing, you have to contact your course intructor about such an issue.' },
  { id: 3, question: 'When will the grades be updated?', answer: 'When they get updated by your course instructor.' },
  
];

const HelpAndSupportPage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Contact form submitted:', contactFormData);
  
    setContactFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="HelpAndSupportPage">
      <h1>Help and Support</h1>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqData.map((faq) => (
            <li key={faq.id}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form-section">
        <h2>Contact Technical Support</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactFormData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactFormData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={contactFormData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
