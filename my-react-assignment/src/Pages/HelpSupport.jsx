// HelpAndSupport.jsx

import React, { useState } from 'react';

const HelpSupport = () => {
  // FAQ data (questions and answers)
  const faqData = [
    {
      question: 'How can I report a missing grade?',
      answer: 'You can report a missing grade by navigating to the Grade Report section and clicking on the "Report Missing Grade" button.',
    },
    {
      question: 'How often are grades updated?',
      answer: 'Grades are typically updated at the end of each semester. However, specific timelines may vary depending on the instructors and courses.',
    },
    // Add more FAQ items as needed
  ];

  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle changes in the contact form fields
  const handleContactFormChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submitting the contact form (mock-up, no real submission)
  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', contactFormData);
    alert('Your message has been submitted. A representative will contact you shortly.');
    // Reset the form fields after submission
    setContactFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Help and Support</h2>

      {/* FAQ Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
        <ul>
          {faqData.map((faqItem, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">{faqItem.question}</p>
              <p className="text-gray-600">{faqItem.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Technical Support</h3>
        <form onSubmit={handleContactFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactFormData.name}
              onChange={handleContactFormChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactFormData.email}
              onChange={handleContactFormChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={contactFormData.message}
              onChange={handleContactFormChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;
