
import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
 return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>Phone: +233 541614808</p>
        <p>Email: mensahbernard006@gmail.com</p>
      </div>
      <div className="footer-content">
        <h3>Follow Us</h3>
        <ul className="social-media-links">
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <h3>links</h3>
        <ul className="links">
          <li>
            <a href="HomePage.js">Home</a>
          </li>
          <li>
            <a href="../Components/HelpAndSupportPage.js">Help</a>
          </li>
          <li>
            <a href="../Components/PrivacyAndSecurityPage.js">Privacy</a>
          </li>
        </ul>
      </div>
    </footer>
 );
};

export default Footer;