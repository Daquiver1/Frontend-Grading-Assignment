// src/components/HelpSupportPage.jsx
import React, { useState } from 'react';

const HelpSupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any desired actions with the form data
    // For now, we'll just log the form data to the console
    console.log({
      name,
      email,
      message,
    });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Help and Support</h1>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          {/* Your FAQ content goes here */}
          <p>Q: How can I report a missing grade?</p>
          <p>A: You can report a missing grade using the Missing Grade Form on the respective page.</p>
          {/* Add more FAQ items as needed */}
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Contact Technical Support</h2>
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="max-w-md">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                className="mt-1 p-2 w-full border rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Footer Component */}
    </div>
  );
};

export default HelpSupportPage;
