// login.js

import React, { useState } from 'react';
import MyNav from './nav';
import Footer from './Footer_02';
import './login.css';

const Login = () => {
  // State to manage login form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Implement login logic here (e.g., send data to server)

    // For this example, log the entered credentials
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    
    <div>
      <div> 
       < MyNav />
      </div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    <div> < Footer /></div>
    </div>
    
  );
};

export default Login;
