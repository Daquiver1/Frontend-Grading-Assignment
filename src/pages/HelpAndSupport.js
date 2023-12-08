import React from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './HelpAndSupport.css';

const HelpAndSupport = () => {
  return (
    <div className="help-and-support-container">
      <h2>Help and Support</h2>
      <ContactForm />
      <Footer position="absolute" />
    </div>
  );
};

export default HelpAndSupport;
