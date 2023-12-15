import React, { useState } from 'react';
import "./Faq.css";
import Navbar from '../../components/Navbar/Navbar';

const Faq = () => {
  const [answersVisible, setAnswersVisible] = useState({});

  const toggleAnswerVisibility = (index) => {
    setAnswersVisible((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  const faqItems = [
    {
      question: ' What should I do if my grade report is missing?',
      answer: 'If your grade report is missing, please contact the registrar\'s office at registrar@example.com for assistance. They will be able to provide information on the status of your grade report.'
    },
    {
      question: ' How long does it take to process missing grade reports?',
      answer: 'The processing time for missing grade reports can vary. It depends on factors such as the volume of requests and administrative processes. If you have concerns about the timeline, reach out to the registrar\'s office for more specific information.'
    },
    {
      question: ' Can I request a copy of my missing grade report?',
      answer: 'Yes, you can request a copy of your missing grade report from the registrar\'s office. Send an email to records@example.com with your details, and they will assist you in obtaining a copy.'
    },
    {
      question: ' Is there a fee for requesting a copy of the grade report?',
      answer: 'The registrar\'s office may have a fee associated with providing additional copies of grade reports. Please check with them directly for information on any applicable fees.'
    },
    {
      question: ' What information should I include in my email to request a copy?',
      answer: 'When requesting a copy of your missing grade report, include your full name, student ID, the semester or academic term in question, and any other relevant details. This will help expedite the process.'
    },
    {
      question: ' Can I check the status of my missing grade report online?',
      answer: 'The online status of missing grade reports may vary by institution. Check the official student portal or contact the registrar\'s office for information on whether online tracking is available.'
    },
  ];

  return (
    <>
      <Navbar />
      <div className='faq'>
        <div className="faqs">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-container">
            <div className="faq-container-box">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3 onClick={() => toggleAnswerVisibility(index)}>
                {item.question}
              </h3>
              {answersVisible[index] && <p>{item.answer}</p>}
            </div>
          ))}
          </div>
          </div>
        </div>
        
        <div className='technical-support'>
          <h2>Technical Support</h2>
          <p>
            If you need further assistance, please contact our technical support team at support@example.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default Faq;
