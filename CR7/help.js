import React from 'react';

const HelpAndSupport = () => {
  const faqData = [
    {
      question: 'How do I view my grades?',
      answer: 'You can view your grades on the Grade Report page. Select the desired semester to filter the results.',
    },
    {
      question: 'What if there is an error in my grade?',
      answer: 'Please contact our support team using the form below. We will assist you in resolving any grade-related issues.',
    },
    
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted!');
  };

  return (
    <div>
      <h1>Help and Support</h1>
      <nav>
      <ul>
        <li><a href="dashboard">landingpage.js</a></li>
        <li><a href="login">loginpage.js</a></li>
        <li><a href="dashboard">dashboard.js</a></li>
        <li><a href="grade report">grade.js</a></li>
        <li><a href="missing grade form">missinggrade.js</a></li>
        <li><a href="help">help.js</a></li>
        <li><a href="instructor page">instructor.js</a></li>
      </ul>
    </nav>
      <section>
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqData.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Contact Technical Support</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpAndSupport;