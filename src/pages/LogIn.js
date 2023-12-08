import React, { useState } from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    alert("Login Successful")
}

  return (
    <body>
    <main>
    <div className="logIn-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Link to = "/Dashboard">
          <button type="button" onClick={handleLogIn}>
          Login
        </button>
        </Link>
      </form>
    </div>
    </main>
    <Footer position = 'absolute' />
    </body>
  );
};

export default LogIn;
