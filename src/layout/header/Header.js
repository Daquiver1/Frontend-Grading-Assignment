import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import '../assets/css/home.css';



const Header = () => {
  return (
    <div>
      <h1>Main Header here</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Header;
