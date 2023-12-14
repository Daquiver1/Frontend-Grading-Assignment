import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from './Footer'

const HelpAndSupport = () => {
  // Mock FAQ data regarding grade reporting
  const faqs = [
    {
      id: 1,
      question: 'How can I report a missing grade?',
      answer: 'You can report a missing grade using the Missing Grade Form available on our platform.'
    },
    {
      id: 2,
      question: 'What should I do if I believe there is an error in my grade?',
      answer: 'In case of a grade discrepancy, contact your instructor or academic advisor for assistance.'
    },
    // Add more FAQ items as needed
  ];

  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message (display confirmation message)
    setMessageSent(true);
    // Clear form fields (optional)
    setContactFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
        <Navigation />
        <Footer />
    <div className="container mt-4">
      <h1>Help and Support</h1>

      <div className="row mt-4">
        {/* FAQ Section */}
        <div className="col-md-6">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header" id={`faqHeading${faq.id}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faqCollapse${faq.id}`}
                    aria-expanded="true"
                    aria-controls={`faqCollapse${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`faqCollapse${faq.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`faqHeading${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        

        {/* Contact Form for Technical Support */}
        <div className="col-md-6">
          <h2>Contact Technical Support</h2>
          <form onSubmit={handleContactFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={contactFormData.name}
                onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={contactFormData.email}
                onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={contactFormData.message}
                onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>

            {messageSent && (
              <div className="alert alert-success mt-3" role="alert">
                Message sent successfully! Our support team will get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
