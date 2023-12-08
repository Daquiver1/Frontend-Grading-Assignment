import React from 'react';
import './Footer.css';

const Footer = ({ position }) => {
  const footerClass = `footer-container ${position === 'absolute' ? 'absolute' : ''}`;

  return (
    <footer className={footerClass}>
      <p>&copy; 2023 University of Ghana, Student Grade System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
