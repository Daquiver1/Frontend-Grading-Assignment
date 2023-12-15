
import React from 'react';
import '../Styles/Footer.css';
import logo from "../Images/logo.jpg";

const Footer = () => {
 return (
    <footer className="footer">
       <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
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
            <a href="/Home">Home</a>
          </li>
          <li>
          <a href="/Dashboard">Dashboard</a>
          </li>
          <li>
          <a href="/HelpAndSupport">Help</a>
          </li>
        </ul>
      </div>
    </footer>
 );
};

export default Footer;