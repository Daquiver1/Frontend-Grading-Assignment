import React from 'react';
import ContactForm from './ContactForm';

const HelpAndSupportPage = () => {
  return (
    <div>
      <h2>Help and Support</h2>
      
      <section>
        <h3>Frequently Asked Questions (FAQ)</h3>
        <p>Here are some common questions about grade reporting:</p>
        <ul>
          <li>Q: How do I report a missing grade?</li>
          <li>A: You can go to the "Missing Grade Form" page and fill out the necessary information.</li>
          {/* Add more FAQ items as needed */}
        </ul>
      </section>

      <section>
        <h3>Contact Technical Support</h3>
        <p>If you have additional questions or need technical assistance, please use the form below:</p>
        <ContactForm />
      </section>
    </div>
  );
};

export default HelpAndSupportPage;
