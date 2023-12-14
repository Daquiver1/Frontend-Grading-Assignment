import React, { useState } from 'react';

const HelpAndSupportPage = () => {
  const faqData = [
    {
      question: 'How do I report a missing grade?',
      answer:
        'You can report a missing grade by navigating to the Missing Grade Reporting System and filling out the Missing Grade Form.',
    },
    {
      question: 'How long does it take to process missing grade reports?',
      answer:
        'The processing time for missing grade reports may vary, but we strive to address them as quickly as possible. You will receive a confirmation once your report is received.',
    },
    {
      question: 'Can I report missing grades for past semesters?',
      answer:
        'Yes, you can report missing grades for past semesters using the Missing Grade Form. Make sure to provide accurate information to expedite the resolution process.',
    },
  ];

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();

    alert('Thank you for your message. Our support team will get back to you soon.');

    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <div style={styles.container}>
      <h2>Help and Support</h2>

      <div style={styles.faqSection}>
        <h3>Frequently Asked Questions</h3>
        <ul>
          {faqData.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.contactForm}>
        <h3>Contact Technical Support</h3>
        <form onSubmit={handleContactSubmit}>
          <label htmlFor="contactName">Your Name:</label>
          <input
            type="text"
            id="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
          />

          <label htmlFor="contactEmail">Your Email:</label>
          <input
            type="email"
            id="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />

          <label htmlFor="contactMessage">Your Message:</label>
          <textarea
            id="contactMessage"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            rows="4"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  faqSection: {
    marginBottom: '30px',
  },
  contactForm: {
    marginTop: '20px',
  },
};

export default HelpAndSupportPage;
