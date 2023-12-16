// components/LoginPage.jsx

import React, { useState } from 'react';
import './LoginPage.css'; 
import { useHistory } from 'react-router-dom';


const LoginPage = () => {
  const [buttonColor, setButtonColor] = useState('blue');
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
   
    setButtonColor('black');
    setTimeout(() => {
      history.push('/dashboard');
    }, 500); 
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form>
        <label htmlFor="studentID">Student ID:</label>
        <input
          type="text"
          id="studentID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-button"
          style={{ backgroundColor: buttonColor }}
          onClick={handleLogin}
          disabled={buttonColor === 'black'}
        >
          {buttonColor === 'black' ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
