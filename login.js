import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './Footer';
import MyNav from './nav';
import './login.css'


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here (e.g., send a request to a server)
    // For simplicity, let's just check if the email and password are not empty
    if (email && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="container mt-5">
      <MyNav />
      <main>
      <h2>Login Page</h2>
      {!loggedIn ? (
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Student ID
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              PIN
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <p>You are logged in!</p>
          {/* Add a logout button or redirect to another page upon successful login */}
        </div>
      )}
      </main>
      <MyFooter />
    </div>
  );
};

export default LoginPage;
