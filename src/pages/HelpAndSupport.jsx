import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const HelpAndSupport = () => {
  // Dummy FAQ data regarding grade reporting
  const faqs = [
    {
      question: 'How do I report a missing grade?',
      answer: 'You can report a missing grade by navigating to the Missing Grade Reporting form and filling out the required details.'
    },
    {
      question: 'What should I do if I see an incorrect grade?',
      answer: 'If you notice an incorrect grade, contact your instructor or academic advisor for assistance in resolving the issue.'
    },
    // Add more FAQs as needed
  ];

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the message
    setMessageSent(true);
    // Reset form fields
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()
  })

  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-[100px]  p-4">
        <h1 className="text-3xl font-bold mb-4">Help and Support</h1>

        {/* FAQ section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">FAQs - Grade Reporting</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact form for technical support */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Technical Support</h2>
          {messageSent ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Message Sent!</strong>
              <span className="block sm:inline">Your message has been sent to technical support.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  className=" resize-none border border-gray-300 rounded px-3 py-2 w-full h-24"
                  required
                >
                  
                </textarea>
              </div>

              <button type="submit" className="bg-[#294671] text-white px-4 py-2 rounded hover:bg-[#4A6387]">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

export default HelpAndSupport;
