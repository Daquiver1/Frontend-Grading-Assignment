import React, { useState } from 'react';
import NavBar from './NavBar';

const HelpSupportPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <NavBar />
      <h1 className="mb-4 text-2xl font-bold">Help and Support Page</h1>

      <h2 className="mb-4 text-xl font-bold">Frequently Asked Questions (FAQ)</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-bold">Q: How can I report a missing grade?</h3>
        <p>
          A: To report a missing grade, please visit our Missing Grade Form page
          and provide the necessary details about your course, instructor,
          expected grade, and explanation for the missing grade.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 font-bold">Q: How long does it take to receive technical support?</h3>
        <p>
          A: Our technical support team aims to respond to inquiries within 24
          hours. However, response times may vary depending on the volume of
          requests.
        </p>
      </div>

      <h2 className="mb-4 text-xl font-bold">Contact Technical Support</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 font-bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactForm.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactForm.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="mb-2 font-bold">Message:</label>
          <textarea
            id="message"
            name="message"
            value={contactForm.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default HelpSupportPage;