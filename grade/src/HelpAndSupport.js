import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpAndSupport = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: 'How do I report missing grades?',
      answer: 'You can report missing grades on the Grade Report page by clicking on the "Report Missing Grade" button.',
    },
    {
      question: 'Can I view grades from previous semesters?',
      answer: 'Yes, you can use the filter on the Grade Report page to view grades from specific semesters or academic years.',
    },
    // Add more FAQs as needed
  ];

  // Function to handle form submission (mock-up)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulated form submission logic (replace with actual form submission)
    alert('Form submitted. We will get in touch with you shortly.');
    // You can reset form fields or perform other actions here
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Help and Support</h1>

      {/* FAQ Section */}
      <div className="mb-4">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`faqHeading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${index}`}
                  aria-expanded="true"
                  aria-controls={`faqCollapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`faqCollapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`faqHeading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form for Technical Support (Mock-up) */}
      <div>
        <h2>Contact Technical Support</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email:
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupport;
