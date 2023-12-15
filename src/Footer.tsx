import React from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>&copy; {new Date().getFullYear()} Missing Grade Reporting System</span>
      </div>
    </footer>
  );
};

export default Footer;