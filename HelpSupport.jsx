import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'

function Help() {
  useEffect(() => {

    console.log('Fetching FAQ data...');
  }, []);

  const handleContactFormSubmit = (event) => {
    event.preventDefault();

    console.log('Simulating sending contact form data:', event.target);
  };

  return (
    <><Header></Header>
    <div className="help-and-support-container">
      <h2>Help and Support Page</h2>

      <div className="faq-section">
        <h3 className='questionss'>Frequently Asked Questions</h3>
        <ul>
          <li>
            <strong>Q:</strong> How do I report my grades?
            <br />
            <strong>A:</strong> To report your grades, visit the Grade Report Page and follow the instructions.
          </li>
          <li>
            <strong>Q:</strong> Can I view my past semester grades?
            <br />
            <strong>A:</strong> Yes, you can filter the Grade Report Page by semester or academic year to view past grades.
          </li>
          <li>
            <strong>Q:</strong> How do i cantact the adminstration??
            <br />
            <strong>A:</strong> Just vist the Instructor Contact Page and you are done.
          </li>
        </ul>
      </div>

      <div className="contact-form-section">
        <h3 className='findme'>Contact Technical Support</h3>
        <form onSubmit={handleContactFormSubmit}>
          <label>Your Name:</label>
          <input type="text" name="name" required />

          <label>Email Address:</label>
          <input type="email" name="email" required />

          <label>Message:</label>
          <textarea name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Help
