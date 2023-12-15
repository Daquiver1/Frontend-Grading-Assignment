import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/LoginPage.css'; 
import UniversalComponent from './UniversalComponent';

const LoginPage = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPIN] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleStudentIDChange = (event) => {
    setStudentID(event.target.value);
  };

  const handlePINChange = (event) => {
    setPIN(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (studentID === '12345' && pin === '12345') {
      console.log('Login successful!');
    } else {
      setErrorMessage('Invalid student ID or PIN. Please try again.');
    }
  };

  return (
    <UniversalComponent>
      <div className="login-container">
        <div className="login-content">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="studentID">Student ID:</label>
              <input
                type="text"
                id="studentID"
                value={studentID}
                onChange={handleStudentIDChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pin">PIN:</label>
              <input
                type="password"
                id="pin"
                value={pin}
                onChange={handlePINChange}
              />
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit">Login</button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </form>
          <div className="login-options">
            <Link to="/forgot-password">Forgot password?</Link>
            <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
          </div>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default LoginPage;
