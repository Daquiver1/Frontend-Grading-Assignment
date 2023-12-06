// HelpAndSupportPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/booccccccctstrap.min.css';
import 'tailwindcss/tailwind.css';

const HelpAndSupportPage = () => {
  // Dummy data for FAQ
  const faqData = [
    { id: 1, question: 'How do I report a missing grade?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, question: 'What should I do if I encounter an error?', answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    // Add more FAQs as needed
  ];

  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Your logic for handling contact form submission goes here
    console.log('Contact form submitted:', contactFormData);
    // You can add further actions such as sending an email or making an API call
  };

  return (
    <div className="container mx-auto my-8">
      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <ul className="flex">
            <li className="mr-4"><a href="/">Home</a></li>
            <li className="mr-4"><a href="/dashboard">Dashboard</a></li>
            <li className="mr-4"><a href="/grade-report">Grade Report</a></li>
            <li className="mr-4"><a href="/missing-grade-form">Missing Grade Form</a></li>
            <li className="mr-4"><a href="/instructor-contact">Instructor Contact</a></li>
            <li className="mr-4"><a href="/help-and-support">Help and Support</a></li>
            {/* Add more links for other pages */}
          </ul>
        </div>
      </nav>

      {/* FAQ section */}
      <div className="max-w-lg mx-auto mb-8">
        <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
        {faqData.map((faq) => (
          <div key={faq.id} className="mb-4 border p-4 rounded-md">
            <button className="text-lg font-semibold mb-2 focus:outline-none">
              {faq.question}
            </button>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact form */}
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6">Contact Technical Support</h2>
        <form onSubmit={handleContactFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={contactFormData.name}
              onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={contactFormData.email}
              onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Your Message
            </label>
            <textarea
              id="message"
              value={contactFormData.message}
              onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
