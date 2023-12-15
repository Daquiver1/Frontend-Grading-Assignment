import React, { useState } from "react";

const FaqItem = ({ question, answer }) => (
  <div className="border-b border-gray-200 py-4">
    <h4 className="font-semibold text-lg">{question}</h4>
    <p className="mt-2 text-sm text-gray-500">{answer}</p>
  </div>
);

const SupportForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, message }); // Mock submit callback
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
      <h3 className="font-semibold text-lg">Contact Us</h3>
      <div className="flex flex-wrap space-y-4 -mx-4">
        <input
          className="border rounded-lg px-4 py-2 w-full md:w-1/2"
          placeholder="Your Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border rounded-lg px-4 py-2 w-full md:w-1/2"
          placeholder="Your Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="border rounded-lg px-4 py-2 resize-none w-full"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

const HelpAndSupportPage = () => {
  const faqs = [
    { question: "How do I use this feature?", answer: "..." },
    // Add more FAQ items
  ];

  return (
    <div className="px-4 py-8 flex flex-col items-start gap-8 md:flex-row md:items-center">
      <section className="flex-1 md:w-2/3">
        <h2>Help & Support</h2>
        <section className="mt-8">
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </section>
      </section>
      <section className="flex-1 md:w-1/3">
        <SupportForm onSubmit={() => console.log("Mock message sent!")} />
      </section>
    </div>
  );
};

export default HelpAndSupportPage;
