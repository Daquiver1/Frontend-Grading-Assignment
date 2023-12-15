import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HelpSupportPage = () => {
  return (
    <div className="container">
      <Navbar />
      <h2>Help and Support</h2>
      <div>
        <h3>Frequently Asked Questions (FAQ)</h3>
        <p>Q: How do I report a missing grade?</p>
        <p>A: You can report a missing grade by visiting the "Report Missing Grade" page and filling out the form.</p>
        {/* Add more FAQs as needed */}
      </div>
      <div>
        <h3>Contact Technical Support</h3>
        <p>If you need further assistance, you can contact our technical support team using the form below:</p>
        {/* Add a contact form for technical support */}
      </div>
      <Footer />
    </div>
  );
};

export default HelpSupportPage;

