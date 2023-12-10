import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Grade Missing Reporter</h3>
          <p className="text-sm">123 Legon, Accra, Ghana</p>
          <p className="text-sm">info@grademissingreporter.com</p>
        </div>
        
        <div className="flex flex-wrap">
          <a href="#" className="mr-4 mb-2">About Us</a>
          <a href="#" className="mr-4 mb-2">Services</a>
          <a href="#" className="mr-4 mb-2">Contact</a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
