import React, { useState } from 'react';
import Footer from './Footer';
import './index.css';
import Navbar from './Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [universityYear, setUniversityYear] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Logging in with:', username, password, universityYear);
  
  };

  return (
    <div>
      <div><Navbar/></div>
   
    <div>
      <h2>Login to your Scholar Grade Account</h2>
      <p>
        Log in to your account to access personalized information, grades, and support services.
      </p>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label htmlFor="universityYear">
          University Year:
          <input
            type="text"
            id="universityYear"
            value={universityYear}
            onChange={(e) => setUniversityYear(e.target.value)}
          />
        </label>
        <br />
        <p>
          <strong>Instructions:</strong> Enter your username, password, and university year to
          proceed.
        </p>
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
    </div>
  );
};

export default Login;
