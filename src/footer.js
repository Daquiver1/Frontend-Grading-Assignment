import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="footer-heading1">Contact Us</h4>
            <p className="info-text1">
              University of Ghana, Legon Campus<br />
              Opposite Mathematics Department<br />
              P.O. Box LG 91, Legon, Accra<br />
              Ghana<br/>
              Phone: +233 501 382 035<br />
              Email: dcs@ug.edu.gh<br />
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading2">Follow Us</h4>
            <div className="social1">
              <a href="./"><img className="icon1" src="icons/icons8-facebook-100.png" alt="Facebook" /></a>
              <a href="./"><img className="icon1" src="icons/icons8-twitterx-100.png" alt="Twitter" /></a>
              <a href="./"><img className="icon1" src="icons/icons8-linked-in-100.png" alt="LinkedIn" /></a>
              <a href="./"><img className="icon1" src="icons/icons8-instagram-100.png" alt="Instagram" /></a>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading3">Quick Links</h4>
            <ul className="quick-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="admissions.html">Programs</a></li>
              <li><a href="faculty.html">Faculty</a></li>
              <li><a href="research.html">Research</a></li>
              <li><a href="Eventsandnews.html">News & Events</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
