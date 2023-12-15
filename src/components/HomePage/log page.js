import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage';

const LoginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate the username and password (add your validation logic here)
    if (username && password) {
      history.push('/home'); // Redirect to the HomePage component
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
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
  );
};

export default LoginForm;