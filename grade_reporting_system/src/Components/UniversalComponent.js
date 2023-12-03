// UniversalComponent.jsx

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../CSS/UniversalComponents.css'; // Import the stylesheet

const UniversalComponent = ({ children }) => {
  return (
    <div className="universal-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default UniversalComponent;
