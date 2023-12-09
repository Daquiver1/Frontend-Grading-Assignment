import React, { useState } from 'react';
import './login.css';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';

export default function Login() {
  const [action, setAction] = useState('Sign Up');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState({
    studentId: '',
    email: '',
    password: '',
  });

  const handleLogin = () => {
    // Simulated backend authentication logic
    if (action === 'Login') {
      // Simulate login with hardcoded credentials
      const { studentId, password } = credentials;
      if (studentId === 'yourStudentID' && password === 'yourPIN') {
        setLoggedIn(true);
        setErrorMessage('');
      } else {
        setLoggedIn(false);
        setErrorMessage('Invalid credentials. Please try again.');
      }
    }
  };

  const handleInputChange = (e, field) => {
    setCredentials({ ...credentials, [field]: e.target.value });
  };

  const handleActionChange = (newAction) => {
    setAction(newAction);
    setLoggedIn(false);
    setErrorMessage('');
    setCredentials({ studentId: '', email: '', password: '' });
  };

  if (loggedIn) {
    
    return <div>Welcome! You are logged in.</div>;
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="login-header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <FaUser size={30} className="img" />
            <input
              type="text"
              placeholder="Student ID"
              value={credentials.studentId}
              onChange={(e) => handleInputChange(e, 'studentId')}
            />
          </div>

          {action === 'Login' ? null : (
            <div className="input">
              <RiMailFill size={30} className="img" />
              <input
                type="email"
                placeholder="example@st.ug.edu.gh"
                value={credentials.email}
                onChange={(e) => handleInputChange(e, 'email')}
              />
            </div>
          )}

          <div className="input">
            <RiLockPasswordFill size={30} className="img" />
            <input
              type="password"
              placeholder="PIN"
              value={credentials.password}
              onChange={(e) => handleInputChange(e, 'password')}
            />
          </div>
        </div>

        {action === 'Sign Up' ? null : (
          <div className="forget-password">
            Lost Password? <span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === 'Login' ? 'submit gray' : 'submit'}
            onClick={handleLogin}
          >
            {action === 'Login' ? 'Login' : 'Sign Up'}
          </div>

          <div
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={() => handleActionChange(action === 'Login' ? 'Sign Up' : 'Login')}
          >
            {action === 'Login' ? 'Sign Up' : 'Login'}
          </div>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}
