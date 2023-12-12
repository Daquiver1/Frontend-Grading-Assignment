import React, {useState} from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    
    <div className="container-home">
        <div className="nav-login">
            <Link to= '/loginpage'><button>Login</button></Link>
        </div>
      <header>
        <h1 className='headtitle'>Missing Report Grade System</h1>
        <p className='pgraph'>Welcome to the Grade Reporting System</p>
      </header>
      
      <footer>
        <p>&copy; 2023 Missing Report Grade System</p>
      </footer>
    </div>
  );
};

export default Home;