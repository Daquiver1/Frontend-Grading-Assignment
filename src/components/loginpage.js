import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar'; // Make sure to have a Navbar component
import Footer from './footer'; 
import './loginpage.css'; // Link your CSS file

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="studentID">Student ID:</label>
          <input type="text" id="studentID" name="studentID" />

          <label htmlFor="pin">PIN:</label>
          <input type="password" id="pin" name="pin" />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;