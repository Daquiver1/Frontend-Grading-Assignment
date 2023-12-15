import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaSearch } from 'react-icons/fa';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container1">
        <div>
          <div className="address">
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
          <div className="search-bar">
            <h4 className="footer-heading3">Search</h4>
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <button className="search-button"><FaSearch style={{ color: '#0e76a8', fontSize: '55px'}}/></button>
            </div>
          </div>
          <div className="social">
            <h4 className="footer-heading2">Follow Us</h4>
            <div>
              <a href="./"><FaFacebook style={{ color: '#3b5998', fontSize: '55px' }} /></a>
              <a href="./"><FaTwitter style={{ color: '#1DA1F2', fontSize: '55px' }} /></a>
              <a href="./"><FaLinkedin style={{ color: '#0e76a8', fontSize: '55px' }} /></a>
              <a href="./"><FaInstagram style={{ color: '#c13584', fontSize: '55px' }} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
