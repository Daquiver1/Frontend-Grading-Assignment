

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
 
    if (studentId === 'yourStudentId' && pin === 'yourPin') {
 
      console.log('Login successful!');
    } else {
      setErrorMessage('Invalid Student ID or PIN. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pin">PIN</label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="form-group">
            <Link to="/dashboard">Go to Dashboard</Link>
          </div>
        </form>
        <div className="forgot-password">
          <Link to="/reset-pin">Reset PIN</Link> | <Link to="/retrieve-student-id">Retrieve Student ID</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
