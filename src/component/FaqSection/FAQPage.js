import React, { useState } from 'react';
import FAQItem from './FAQItem';
import ContactForm from './ContactForm';
import './FAQPage.css';
import Navbar from '../Navbar';
import Footer from '../footer';

const FAQPage = () => {
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      question: 'How can I view my grades?',
      answer: 'You can view your grades by logging into your account and navigating to the "Grade Report" section.',
    },
    {
      id: 2,
      question: 'When are grades typically released?',
      answer: 'Grades are usually released at the end of each semester. However, specific dates may vary, so check the academic calendar for the exact release schedule.',
    },
    
    {
    id: 3,
    question: 'Can I request a grade review?',
    answer: 'Yes, you can request a grade review by contacting the instructor of the course. Make sure to provide a valid reason for the review and any supporting documentation.',
    },
  { 
    id: 4, 
    question: 'What grading system is used?',
    answer: 'We use a standard letter grading system (A, B, C, D, F) along with grade point averages (GPA) to evaluate academic performance.',
  },
    // Add more FAQ items
  ]);

  const [contactFormVisible, setContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setContactFormVisible(!contactFormVisible);
  };

  return (
    <div>
      <Navbar/> 
    <div className="faq-container">
      <h1>Grade Reporting System FAQ</h1>

      <div className="faq-list">
        {faqData.length > 0 ? (
          faqData.map((item) => <FAQItem key={item.id} question={item.question} answer={item.answer} />)
        ) : (
          <p>No FAQ items available.</p>
        )}
      </div>

      <button className="contact-button" onClick={toggleContactForm}>
        {contactFormVisible ? 'Close Contact Form' : 'Contact Technical Support'}
      </button>

      {contactFormVisible && <ContactForm />}
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default FAQPage;
