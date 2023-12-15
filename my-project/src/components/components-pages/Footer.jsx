import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../components-css/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement your newsletter signup logic here (e.g., sending email to a list)
    alert(`Thanks for subscribing to our newsletter!`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {/* Existing social media links */}
          <a href="https://www.facebook.com/your-page" target="_blank" rel="noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/your-page" target="_blank" rel="noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.twitter.com/your-page" target="_blank" rel="noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/your-page" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" />
          </a>
          {/* ... other social media icons ... */}
        </div>
        <div className="footer-info">
    
           
          <div className="newsletter-signup">
            <span>Stay updated! Sign up for our newsletter</span>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
             
            </form>
          </div>
          <hr/>
          <p className="copyright">
            © {year} Grading System. All rights reserved. |
            <a  className="contact"href="mailto:youremail@domain.com">Contact Us</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 


