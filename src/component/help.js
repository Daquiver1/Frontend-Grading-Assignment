import React from 'react';
import './help.css'; // Import your CSS file

const HelpAndSupport = () => {
  return (
    <div className="help-support-container">
      <div className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How do I create an account?</h4>
      
        </div>
        <div className="faq-item">
          <h4>How can I contact Instructor?</h4>
         
        </div>
        <div className="faq-item">
          <h4>How can I track my records?</h4>
         
        </div> <div className="faq-item">
          <h4>How do I view only my current grades? </h4>
         
        </div> <div className="faq-item">
          <h4>How do I view my CGPA?</h4>
         
        </div>
      </div>

      <div className="section">
        <h2>Troubleshooting Guides</h2>
        <div className="guide-item">
          <h4>Some features on the website are not working. What can I do?</h4>
         
        </div>
        <div className="guide-item">
          <h4>I can't log in to my account. What should I do?</h4>
         
        </div>
        <div className="guide-item">
          <h4>Why am I experiencing slow loading times on the website?</h4>
          </div>

          <div className="guide-item">
          <h4>Why are my grades not displaying correctly on the website?</h4>
          </div>
       
      </div>

      <div className="section">
        <h3>Other Information!</h3>
        <p>Tutorials: <a href='https://youtu.be/2sT3DDiQgSE'>Tap Here! </a>Watch videos on how to use this application.</p>
        <p>Email: mgrs123@gmail.com</p>
        <p>Phone: +1234567890</p>
      </div>

      <div className="section">
        <h2>Feedback Form</h2>
        <form>
          <label htmlFor="feedback">Share your contribution:</label>
          <textarea id="feedback" rows="4" cols="50"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

     
      <div className="section">
        <h2>Connect with Us</h2>
        <div className="social-links">
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
          
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
