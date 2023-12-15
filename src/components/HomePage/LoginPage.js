import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from '../navigation';
import Footer from './Footer';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate the username and password (add your validation logic here)
    if (username && password) {
      navigate('/Dashboard'); // Redirect to the HomePage component
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="container">
      <h2>Login</h2>
      <label  className='ll'>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className='ll'>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default LoginForm;
