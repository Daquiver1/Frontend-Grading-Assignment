// LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';
import UGLogo from '../assets/ug logo.png'; 

const LoginPage = () => {
  return (
    <div>
       <header>
        <div className="logo-container">
          <img src={UGLogo} alt="UG Logo" className="ug-logo" />
          <h1>Missing Grade Reporting System</h1>
        </div>
      </header>
      <main>
        <LoginForm />
      </main>
      <footer>
        {/* Common footer content */}
      </footer>
    </div>
  );
};

export default LoginPage;
