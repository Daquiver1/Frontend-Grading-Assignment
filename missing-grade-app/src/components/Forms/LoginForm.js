import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleForm = () => {
    setShowSignup(!showSignup);
  };

  const handleForgotUsername = () => {
    console.log('Forgot StudentID');
    // Implement logic for handling forgot username
  };

  const handleForgotPassword = () => {
    console.log('Forgot Pin');
    // Implement logic for handling forgot password
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSignup) {
      console.log('Signing up...');
      // Simulated logic for signup (would involve backend API call in a real setup)
      navigate('/dashboard'); // Redirect to dashboard after successful signup
    } else {
      console.log('Logging in...');
      // Simulated logic for login (would involve backend API call in a real setup)
      navigate('/dashboard'); // Redirect to dashboard after successful login
    }
  };

  return (
    <div className="form-container">
      <div className={showSignup ? 'hide-form' : ''}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" placeholder="Student ID" />
            <button
              type="button"
              className="forgot-button"
              onClick={handleForgotUsername}
            >
              Forgot Username?
            </button>
          </div>
          <div className="input-container relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Pin"
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-sm text-blue-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            <button
              type="button"
              className="forgot-button"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="toggle-form-link" onClick={handleToggleForm}>
          Don't have an account? Sign Up
        </p>
      </div>

      <div className={showSignup ? 'show-form' : 'hide-form'}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-container relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create Password"
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-sm text-blue-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <p className="toggle-form-link" onClick={handleToggleForm}>
          Already have an account? Log In
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
