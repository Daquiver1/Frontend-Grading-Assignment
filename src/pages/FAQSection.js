import React from 'react';
import './FAQSection.css';
import Footer from './Footer';

const FAQSection = () => {
  return (
    <div className="faq-section">
      <h3>Frequently Asked Questions</h3>
      <div className="faq-item">
        <p>Q: How can I report missing grades?</p>
        <p>A: You can report missing grades through the Grade Reporting page. Click on the "Report Missing Grades" button and fill out the form.</p>
      </div>
      <div className="faq-item">
        <p>Q: How can I access my grades from previous semesters?</p>
        <p>A: You can view your grades from previous semesters on the Grade Report page. Use the filter options to select the desired semester or academic year.</p>
      </div>
      <div className="faq-item">
        <p>Q: Can I edit a grade report after submission?</p>
        <p>A: Once a grade report is submitted, it cannot be edited. Please review the information carefully before submitting the form.</p>
      </div>
      <div className="faq-item">
        <p>Q: What should I do if I encounter technical issues while using the grade reporting system?</p>
        <p>A: If you experience technical issues, please fill out the contact form below to reach our technical support team. Provide as much detail as possible about the issue you're facing.</p>
      </div>
      <div className="faq-item">
        <p>Q: How long does it take for missing grades to be addressed?</p>
        <p>A: The time it takes to address missing grades depends on the nature of the issue. Our team will work to resolve it as quickly as possible and will notify you of any updates.</p>
      </div>
      <Footer position ='relative' />
    </div>
  );
};

export default FAQSection;
