import React, { useState } from 'react';
import Header from './Header';

const HelpAndSupportPage = () => {
    const [contactFormData, setContactFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleContactFormChange = (e) => {
      const { name, value } = e.target;
      setContactFormData({ ...contactFormData, [name]: value });
    };
  
    const handleContactFormSubmit = (e) => {
      e.preventDefault();
      alert('Simulating sending contact form:', contactFormData);
    };
  
    return (
      <div>
        <Header />
      <div className="help-and-support-page">
        <h1>Help and Support Page</h1>
  
        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
  
          <div className="faq-item">
            <h3>Q: How are grades reported?</h3>
            <p>A: Grades are reported through the online grading system.</p>
          </div>
  
          <div className="faq-item">
            <h3>Q: When are grades typically available?</h3>
            <p>A: Grades are usually available within two weeks after the end of the semester.</p>
          </div>
  
          <div className="faq-item">
            <h3>Q: Can I view my grades on a mobile device?</h3>
            <p>A: Yes, the online grading system is accessible on both desktop and mobile devices.</p>
          </div>
  
          <div className="faq-item">
            <h3>Q: What should I do if I believe there is an error in my grades?</h3>
            <p>
              A: If you believe there is an error in your grades, please contact your instructor
              directly or reach out to the academic services department.
            </p>
          </div>
        </section>
  
         {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Contact Technical Support</h2>
        <form onSubmit={handleContactFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactFormData.name}
            onChange={handleContactFormChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactFormData.email}
            onChange={handleContactFormChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={contactFormData.message}
            onChange={handleContactFormChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
      </div>
      </div>
    );
  };
  
  export default HelpAndSupportPage;
  
