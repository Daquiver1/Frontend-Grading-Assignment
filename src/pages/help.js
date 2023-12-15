
import React, { useState } from 'react';
import './help.css'; // 

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
    question: 'Is there a way to attach notes to grades in the web grading system?',
    answer: 'No, there is no way to attach notes to grades in the web grading system.',
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
  const [showAnswer, setShowAnswer] = useState([]); // state to track the visibility of the answers

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to submit the contact form
  };

  const handleToggleClick = (index) => {
    // function to toggle the visibility of the answers
    setShowAnswer((prevState) => {
      // create a copy of the previous state
      const newState = [...prevState];
      // flip the boolean value at the given index
      newState[index] = !newState[index];
      // return the new state
      return newState;
    });
  };

  return (
    <div className="help-support-container">
      <div className="faq-container">
        <h3>FAQ</h3>
        <ul className="faq-list">
          {FAQ.map((item, index) => (
            <li key={index} className="faq-item">
              <div className="faq-question">
                <h4>{item.question}</h4>
                <button
                  className="faq-toggle"
                  onClick={() => handleToggleClick(index)}
                >
                  <i
                    className={`fas fa-chevron-${
                      showAnswer[index] ? 'up' : 'down'
                    }`}
                  ></i>
                </button>
              </div>
              <div
                className={`faq-answer ${
                  showAnswer[index] ? 'show' : 'hide'
                }`}
              >
                <p>{item.answer}</p>
              </div>
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
            className="contact-input"
            placeholder="Message"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          ></textarea>
          <button className="contact-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpandSupport;
