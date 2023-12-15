import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is the purpose of the Missing Grade Reporting System??',
      answer: 'The Missing Grades Reporting System allows students, faculty, or administrators to report missing grades for courses, ensuring timely resolution and accurate academic records.',
    },
    {
      question: 'Who can report a missing grade through this system?',
      answer: 'Any registered student or faculty member affiliated with our institution can utilize this system to report a missing grade.',
    },
    {
        question: 'How do I report a missing grade?',
        answer: "To report a missing grade, log in to your account on the system's platform. Choose the respective course and submit the necessary details, such as the course code, instructor's name, and any additional information required. Once submitted, the system will initiate the reporting process for resolution.",
      },
      {
        question: 'What happens after I report a missing grade?',
        answer: "After reporting a missing grade, the system automatically notifies the relevant department or instructor responsible for grading. They will review and rectify the issue promptly. You will receive updates via the system regarding the progress and resolution of the reported missing grade.",
      },
      {
        question: 'Is there a deadline for reporting missing grades?',
        answer: "While it's recommended to report missing grades as soon as they are noticed, the system typically allows for reporting within a reasonable timeframe after the grade submission deadline. However, it's advisable to adhere to institutional policies regarding reporting timelines to ensure timely resolution.",
      },
      {
        question: 'How can I track the status of my reported missing grade?',
        answer: "Upon logging in to the system, you can access the status dashboard or section dedicated to reported missing grades. There, you will find real-time updates on the status of your reported grades, including any actions taken, communication, and resolution progress.",
      },
      {
        question: 'What should I do if my missing grade issue is not resolved?',
        answer: "In the rare event that your missing grade remains unresolved within the system's stipulated timeframe, we encourage you to reach out to the relevant academic department or system support team. They will assist you in escalating and addressing the issue effectively.",
      },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
            <div className="faq-section">
        <Header />
        <Sidebar />
      <div className="faq-container">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <ul className="faq-list">
            {faqData.map((faq, index) => (
            <li key={index}>
                <div
                className={`question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAnswer(index)}
                >
                <span className="question-text">{faq.question}</span>
                {activeIndex === index ? '-' : '+'}
                </div>
                {activeIndex === index && (
                <div className="answer">{faq.answer}</div>
                )}
            </li>
            ))}
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default FAQ;
