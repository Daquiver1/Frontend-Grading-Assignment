import React, { useRef } from 'react';
import './Contactx.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contactx = () => {
  const form = useRef();

  const sendEmail = () => {
    
  };

  return (
    <>
    <Navbar />
    <section className="contactx-section">
      <div className="faq-container">
        <h1 className="faq-heading">Frequently Asked Questions: Grade Reporting and Locating Missing Grades</h1>

        <section className="faq-item">
          <h2 className="faq-question">Q: How do I inform about a missing grade?</h2>
          <p className="faq-answer">
            A: To notify us about a missing grade, please follow these steps:
            <ol className="faq-steps">
              <li>Login to our grade reporting portal.</li>
              <li>Visit the "Report Missing Grade" section.</li>
              <li>Complete the necessary details, such as course name, instructor name, expected grade, and an explanation for the missing grade.</li>
              <li>Submit the form, and our support team will investigate the matter.</li>
            </ol>
          </p>
        </section>

        <section className="faq-item">
          <h2 className="faq-question">Q: How long does it take to handle missing grade reports?</h2>
          <p className="faq-answer">
            A: The processing time for missing grade reports can vary. We are dedicated to resolving issues promptly. You will receive an email notification once your report has been reviewed, and any necessary actions have been taken.
          </p>
        </section>

        <section className="faq-item">
          <h2 className="faq-question">Q: Can I track the status of my missing grade report?</h2>
          <p className="faq-answer">
            A: Absolutely, you can monitor the progress of your missing grade report by logging into the grade reporting portal and navigating to the "Check Report Status" section. There, you'll find updates on the status of your report.
          </p>
        </section>

        <section className="faq-item">
          <h2 className="faq-question">Q: What steps should I take if my grade is still missing after reporting?</h2>
          <p className="faq-answer">
            A: If your grade is still missing after reporting, kindly contact our support team through the "Contact Us" page. Provide your report reference number and any additional details, and we will assist you in resolving the issue.
          </p>
        </section>
      </div>

      <div className="contact-form-container">
        <h2 className="form-heading text-center">Contact Us</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" placeholder="Full Name" name="user_name" required className="form-input" />
          <input type="email" placeholder="Email" name="user_email" required className="form-input" />
          <input type="text" placeholder="Subject" name="subject" required className="form-input" />
          <textarea name="message" cols="30" rows="10" className="form-textarea"></textarea>
          <button type='submit' className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Contactx;
