import React from 'react';

const Help = () => {
  const faqData = [
    {
      question: 'How do I report a missing grade?',
      answer: 'You can report a missing grade through the Missing Grade Form on our platform.',
    },
    {
      question: 'What should I do if I encounter technical issues?',
      answer: 'If you face any technical issues, please use the Contact Form to reach out to our support team.',
    },
    // Add more FAQ items as needed
  ];

  const renderFAQ = () => {
    return faqData.map((faq, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
        <p className="text-gray-700">{faq.answer}</p>
      </div>
    ));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    console.log('Contact form submitted!');
    // Add logic for handling contact form submission (e.g., sending an email)
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-400 rounded-md shadow-md text-gray-800">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        {renderFAQ()}
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Support</h2>
        <form onSubmit={handleContactSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input type="text" id="name" name="name" className="mt-1 p-3 w-full border rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
              </label>
              <input type="email" id="email" name="email" className="mt-1 p-3 w-full border rounded-md" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Your Message
            </label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-3 w-full border rounded-md" required />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Help;
