// Footer.js

import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2c2a58',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div className="footer-content">
        <p>&copy; 2023 Grade Issue Reporting App. All rights reserved.</p>
        <p>Contact: support@gradesapp.com</p>
      </div>
    </footer>
  );
};

export default Footer;
