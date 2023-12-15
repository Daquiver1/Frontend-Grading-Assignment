import React from 'react';

const HelpAndSupportPage = () => {
  const faqData = [
    {
      question: 'How do I report a missing grade?',
      answer: 'You can report a missing grade by filling out the Missing Grade Form available on our platform.',
    },
    {
      question: 'When will grades be updated?',
      answer: 'Grade updates usually take place within 1-2 weeks after the submission deadline.',
    },
  
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic or display confirmation message here
    console.log('Support Form submitted!');
  };

  return (
    <div className="container px-12 py-12 mx-auto bg-white">
      <h1 className="text-4xl font-bold mb-8">Help & Support</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-1">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Technical Support</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-md p-2 w-full h-32"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default HelpAndSupportPage;
