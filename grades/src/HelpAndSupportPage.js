import  { useState } from 'react';

const HelpAndSupportPage = () => {
  const faqs = [
    {
      question: 'My Grade isnt showing?',
      answer: 'Fill the missing Grade form .',
    },
    {
      question: 'This isnt the grade I had?',
      answer: 'Fill the Instuctor contact form.',
    },
  ];

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the contact form submission here

    // For the sake of the example, we'll just set a state variable to indicate the form submission
    setFormSubmitted(true);
    
    // Simulated email sent
    const email = e.target.email.value;
    alert("Simulated email sent to: " + email);

    console.log('Contact form submitted!');
  };

  return (
    <div>
      <h2>Help and Support</h2>

      <section>
        <h3>Frequently Asked Questions (FAQs)</h3>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Contact Support</h3>
        {formSubmitted ? (
          <p>Your question has been submitted. We'll get back to you shortly. Thank you!</p>
        ) : (
          <form onSubmit={handleContactFormSubmit}>
            <label>
              Your Name:
              <input type="text" name="name" required />
            </label>

            <label>
              Your Email:
              <input type="email" name="email" required />
            </label>

            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>

            <button type="submit">Submit</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default HelpAndSupportPage;