// HelpAndSupportPage.js
import React from "react";
import FAQSection from "./FAQSection";
import ContactForm from "./ContactForm";
import "./HelpAndSupportPage.css";

const HelpAndSupportPage = () => {
  return (
    <div className="help-and-support-container">
      <h2> Help and Support </h2>
      {/* FAQ Section */} <FAQSection />
      {/* Contact Form */} <ContactForm />
    </div>
  );
};

export default HelpAndSupportPage;
