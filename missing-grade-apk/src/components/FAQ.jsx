import React, { useState } from 'react';
import './FAQ.css'
import Navbar from './Navbar'
import Footer from './footer'
const FAQ = () => {
 const [questions, setQuestions] = useState([
    { id: 1, question: 'What is this system?', answer: 'Its a system to help you to look at your grades and rectify any issues.' },
    { id: 2, question: 'Why use this system?', answer: 'Its a quick, easy and effective way to go about your grade checking shananigans.' },
 ]);

 const [contactInfo, setContactInfo] = useState({ name: 'Jedidiah Kwame Henaku-Budu', email: 'jkhoneysuckle@pythomail.com' });

 const findAnswer = (question) => {
    const selectedQuestion = questions.find((q) => q.question === question);
    return selectedQuestion ? selectedQuestion.answer : 'No answer found';
 };

 return (
  <div>
    <Navbar/>
  <div className="faq">
    <h2>Contact Info:</h2>
    <p>Name: {contactInfo.name}</p>
    <p>Email: {contactInfo.email}</p>

    <h2>FAQ:</h2>
    {questions.map((q) => (
      <div key={q.id} className="faq-item">
        <h3>{q.question}</h3>
        <p>{q.answer}</p>
      </div>
    ))}

    <h2>Find Answer:</h2>
    <input type="text" placeholder="Enter question" />
    <button onClick={() => alert(findAnswer('What is Django?'))}>Submit</button>
  </div>
  <Footer/>
  </div>
);
};

export default FAQ;