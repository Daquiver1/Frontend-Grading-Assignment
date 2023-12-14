import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Your footer content */}
            <h4>Follow Us</h4>
            <div>
              {/* Social media icons */}
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12">
            {/* Copyright information */}
            <p>&copy; 2023 University of Ghana</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
