import React from 'react';

const HelpAndSupport= () => {
  const faqItems = [
    { id: 1, question: 'How to report a missing grade?', answer: 'Lorem ipsum dolor sit amet, ...' },
    { id: 2, question: 'How can I contact technical support?', answer: 'Lorem ipsum dolor sit amet, ...' },
  ];

  const submitSupportRequest = (formData) => {
    console.log('Submitting support request:', formData);
  };

  return (
    <div>
      <h1>Help and Support Page</h1>
      <section>
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqItems.map((faq) => (
            <li key={faq.id}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Contact Technical Support</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitSupportRequest({ /* Form data */ });
          }}
        >
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpAndSupport;
