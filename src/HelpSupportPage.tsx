import React, { useState } from 'react';
import './HelpSupportPage.css'
import 'bootstrap/dist/css/bootstrap.css'


const HelpSupportPage: React.FC = () => {
  const [supportFormState, setSupportFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSupportInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSupportFormState({ ...supportFormState, [name]: value });
  };

  const handleSupportSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Your support request has been submitted.');
    setSupportFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  // FAQ data
  const faqs = [
    {
      question: 'How do I report a missing grade?',
      answer: 'Navigate to the "Report Missing Grade" page and fill out the form with the necessary details.'
    },
    {
      question: 'When will reported grades be updated?',
      answer: 'Reported grades are typically updated within 5-7 business days.'
    },
    
  ];

  return (
    <div className="help-support-page">
      <h2 className="page-title">Help and Support</h2>
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="support-form-section">
        <h3>Contact Support</h3>
        <form onSubmit={handleSupportSubmit} className="support-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={supportFormState.name}
              onChange={handleSupportInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={supportFormState.email}
              onChange={handleSupportInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={supportFormState.message}
              onChange={handleSupportInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupportPage;
