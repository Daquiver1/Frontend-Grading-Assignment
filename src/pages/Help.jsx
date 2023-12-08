import React from 'react';
import './Help.css';

const Helpsupport = () => {
  // Sample FAQ data for grade reporting
  const faqs = [
    {
      question: 'How do I report a missing grade?',
      answer: 'You can report a missing grade by visiting the Missing Grade Form Page.',
    },
    {
      question: 'Can I request a grade change?',
      answer: 'Grade change requests should be communicated directly with the instructor.',
    },
    // Add more FAQ items as needed
  ];

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the contact form submission
    // For now, let's just log the form submission
    console.log('Contact form submitted!');
    // You can add further actions here (e.g., send data to a server)
  };

  return (
    <div className="HelpSupport-container">
      <h1>Help and Support</h1>

      <div className="faq-section">
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="contact-form-section">
        <h2>Contact Form</h2>
        <form onSubmit={handleContactFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Helpsupport;
