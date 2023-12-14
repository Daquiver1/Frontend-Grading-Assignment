// HelpAndSupport.js
import React, { useState } from 'react';

const HelpAndSupport = () => {
  // Sample FAQ data
  const faqData = [
    { id: 1, question: 'How do I report a missing grade?', answer: 'You can report a missing grade...' },
    { id: 2, question: 'What should I do if I forgot my password?', answer: 'To reset your password...' },
    // Add more FAQ items as needed
  ];

  // State for active FAQ item
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Function to toggle FAQ item visibility
  const toggleFAQ = (id) => {
    setActiveFAQ((prevActive) => (prevActive === id ? null : id));
  };

  // State for contact form
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate sending a support request (customize this logic)
    alert('Support request submitted successfully!');
    // Reset the form fields
    setContactForm({ name: '', email: '', message: '' });
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* FAQ Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        {faqData.map((faq) => (
          <div key={faq.id} className="mb-4">
            <button
              className="w-full text-left p-2 rounded-md bg-white hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="font-semibold">{faq.question}</span>
            </button>
            {activeFAQ === faq.id && (
              <div className="bg-gray-100 p-4 rounded-md">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form for Technical Support */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Technical Support</h3>
        <form onSubmit={handleContactSubmit} className="max-w-md mx-auto bg-white p-4 rounded shadow-md">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={handleInputChange}
              rows="4"
              required
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupport;
