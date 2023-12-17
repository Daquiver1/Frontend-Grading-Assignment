import React from 'react';
import Footer from './Footer';

const HelpAndSupportPage = () => {
  const faqData = [
    { question: 'How do I report a missing grade?',
     answer: 'You can report a missing grade using the Missing Grade Form on the Dashboard.' },
    
    { question: 'Can I edit a submitted missing grade report?',
     answer: 'No, once submitted, missing grade reports cannot be edited. Please double-check before submitting.' },
    {
          question: 'How do I report a missing grade?',
          answer: 'You can report a missing grade by navigating to the Dashboard and using the Missing Grade Form. Select the course, provide details, and submit the form.',
        },
        {
          question: 'Can I edit a submitted missing grade report?',
          answer: 'No, once you submit a missing grade report, it cannot be edited. Please double-check the information before submitting.',
        },
        {
          question: 'How often are grades updated in the system?',
          answer: 'Grades are typically updated at the end of each grading period. If you notice a delay, please contact your instructor or the academic administration.',
        },
        {
          question: 'What should I do if I forgot my login credentials?',
          answer: 'If you forgot your Student ID or PIN, please use the "Forgot Password" link on the login page. Follow the instructions to reset your password.',
        },
      ];      
  

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    
    alert('Contact form submitted. This is a mock-up, no real submission.');
  };

  return (
    <div className="container text-white bg-blue-500 help flex flex-col justify-center place-items-center h-full">
      <h2 className="text-2xl font-bold mb-4">Help and Support</h2>
      <div>
        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
        <ul className="list-disc pl-4">
          {faqData.map((faqItem, index) => (
            <li key={index} className="mb-2">
              <strong>{faqItem.question}</strong>
              <p>{faqItem.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-4">Contact Technical Support</h3>
        <form onSubmit={handleContactFormSubmit} className="max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endurance">
              
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border p-2 rounded"
              placeholder="endurance"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border p-2 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4 flex flex-col justify-center place-items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-[500px] border p-2 rounded"
              placeholder="Your Message"
            ></textarea>
            <button
            type="submit"
            className="bg-green-500 hover:bg-blue-700 mt-5 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline flex justify-center place-items-center"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HelpAndSupportPage;
