// Login.jsx
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling

function Login() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can perform login validation with studentId and password
    if (studentId === 'exampleID' && password === 'examplePassword') {
      // Successful login, you can redirect or perform further actions
      console.log('Login successful');
    } else {
      // Login failed
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {loginError && <p className="error-message">Invalid student ID or password</p>}
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
