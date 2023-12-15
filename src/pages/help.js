import React, { useState } from 'react';
import '../pages/help.css';

const FAQ = [
 {
    question: 'How do I view my grade report?',
    answer: 'You can view your grade report by visiting the Grade Report section of our website.',
 },
 {
    question: 'Why are some of my courses not appearing in my grade report?',
    answer: 'Some courses may not be included in your grade report if they are still in progress or have been dropped. Please verify the course status before accessing the grade report.',
 },
 {
    question: 'How do I report a problem with my grade report?',
    answer: 'If you have found an issue with your grade report, please submit a support ticket using the contact form on this page. Our technical support team will investigate and address the issue.',
 },
];

const HelpandSupport = () => {
 const [contactName, setContactName] = useState('');
 const [contactEmail, setContactEmail] = useState('');
 const [contactMessage, setContactMessage] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to submit the contact form
 };

 return (
    <div className="help-support-container">
            <div className="faq-container">
        <h3>FAQ</h3>
        <ul>
          {FAQ.map((item, index) => (
            <li key={index}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-form-container">
        <h3>Contact Us</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="contact-input"
            type="text"
            placeholder="Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <textarea
            className="contact-textarea"
            placeholder="Message"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          />
          <button className="contact-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
 );
};

export default HelpandSupport;