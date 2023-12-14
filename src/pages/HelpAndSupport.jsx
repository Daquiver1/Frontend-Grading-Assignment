import React, { useState } from "react";

const HelpAndSupport = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "How can I report a missing grade?",
      answer: "You can go to the 'Missing Grade Form' page and fill out the form to report a missing grade.",
      isOpen: false,
    },
    {
      question: "How do I contact technical support?",
      answer: "You can use the contact form on this page to send us a message. We'll get back to you as soon as possible.",
      isOpen: false,
    },
  ]);

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactFormData);
    setFormSubmitted(true);
  };

  const toggleFaqItem = (index) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Help and Support</h2>

      <div className="max-w-md mx-auto text-white mb-8">
        <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
        {faqItems.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFaqItem(index)}
              className="flex justify-between w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span>{faq.isOpen ? "▼" : "▲"}</span>
            </button>
            {faq.isOpen && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <form onSubmit={handleContactFormSubmit} className="max-w-md mx-auto">
        {formSubmitted ? (
          <div className="text-green-500 mb-4">
            Thank you for your message! We'll get back to you soon.
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-white">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactFormData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-white">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactFormData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-white">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={contactFormData.message}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </>
        )}
      </form>

     
      <footer className="text-white py-4 text-center">
        
        <p>&copy; 2023 Thelsare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HelpAndSupport;