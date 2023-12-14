// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-black py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2023 GradeUp. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="mr-4 text-sm hover:text-gray-500">Privacy Policy</a>
          <a href="/terms-of-service" className="text-sm hover:text-gray-500">Terms of Service</a>
        </div>
        <div className="mt-4">
          {/* Social Media Icons */}
          <a href="#" className="text-sm text-blue-400 hover:text-white mr-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-sm text-blue-400 hover:text-white mr-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-sm text-blue-400 hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
