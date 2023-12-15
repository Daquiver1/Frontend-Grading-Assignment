import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="footer-div">
        <div className="subfooter-div">
          <p>&copy; 2023 Missing Grade Reporting System</p>
          <div>
            <a href="/help-and-support" className="mr-4">Help & Support</a>
            <a href="/contact-us">Contact Us</a>
            <p>Contact Us</p>
            <i className="fa fa-phone" style={{ fontSize: '24px' }}></i>
            +233 501 382 035<br />
            <i className="fa fa-phone" style={{ fontSize: '24px' }}></i>
            +233 559 145 698<br />
            <i className="fa fa-envelope" style={{ fontSize: '24px' }}></i>
            dcs@ug.edu.gh <br />
            <i className='fas fa-map-marker-alt' style={{ fontSize: '24px' }}></i>
            Location: University Of Ghana, Legon Campus <br />
            Opposite Mathematics Department <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
