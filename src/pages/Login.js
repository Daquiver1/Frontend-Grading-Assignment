import React, { useState } from 'react';
import './Login.css';
import loginImage from '../images/3.jpeg'; // Import your image file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'student' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password!');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div className="loggedInContainer">
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="all">
      <div className='login-container'>
        <div className="login-content">
          <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
               {/* Remember Me Checkbox Section */}
    <div className="remember-me">
      <input
        type="checkbox"
        id="rememberMe"
      />
      <label htmlFor="rememberMe">Remember Me</label>
    </div>
    {/* End of Remember Me Checkbox Section */}
              <button className='btn1' type="submit">Login</button>
            </form>
            <p>For demonstration purposes, use Student ID as username and pin as password.</p>
          </div>
        </div>
      </div>
      <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
    </div>
      
  );
};

export default Login;

