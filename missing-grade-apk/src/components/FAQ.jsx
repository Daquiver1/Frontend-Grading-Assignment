import React, { useState } from 'react';
import './FAQ.css'


const FAQ = () => {
 const [questions, setQuestions] = useState([
    { id: 1, question: 'What is Python?', answer: 'Python is a high-level, interpreted programming language.' },
    { id: 2, question: 'What is Django?', answer: 'Django is a high-level Python web framework.' },
 ]);

 const [contactInfo, setContactInfo] = useState({ name: 'John Doe', email: 'john.doe@example.com' });

 const findAnswer = (question) => {
    const selectedQuestion = questions.find((q) => q.question === question);
    return selectedQuestion ? selectedQuestion.answer : 'No answer found';
 };

 return (
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
);
};

export default FAQ;