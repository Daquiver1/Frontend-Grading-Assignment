import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
          <a href="https://www.flinkedin.com/your-page" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" />
          </a>
          {/* ... other social media icons ... */}
        </div>
        <div className="footer-info">
          <p>
            <a href="/contact">Contact Us</a> |
            <a href="/sitemap">Site Map</a>
          </p>
          <div className="newsletter-signup">
            <span>Stay updated! Sign up for our newsletterzzz:</span>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <p className="copyright">
            © {year} Your Website Name. All rights reserved. |
            <a href="mailto:youremail@domain.com">Contact Us</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
