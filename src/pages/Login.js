import React, { useState } from "react";
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login/sign-in logic here using 'email' and 'password'
    if (email === "example@example.com" && password === "password123") {
      // Simulating a successful login, replace this with your authentication logic
      setIsLoggedIn(true);
      setError(null);
      setLoginMessage(`Logged in successfully as ${email}`);
    } else {
      setError("Invalid email or password. Please try again.");
      setIsLoggedIn(false);
      setLoginMessage("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setLoginMessage("");
  };

  return (
    <div className="maincont">
      <div className="login-container">
        {isLoggedIn ? (
          <div className="welcome-message">
            <h2>Welcome, {email}!</h2>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <React.Fragment>
            <h1 className="login-heading">Login</h1>
            {error && <p className="error-message">{error}</p>}
            <p className="login-message">{loginMessage}</p>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-form-group">
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="login-input-field"
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="login-input-field"
                />
              </div>

              <button type="submit" className="login-submit-btn">
                Sign In
              </button>
              <p>Welcome student.<br></br> Keep up your excellent work and continue to pursue your dreams with passion and dedication.</p>

            </form>
            <p className="B">We wish you the best in your future  endavors.</p>
          </React.Fragment>

        )}
      </div>
    </div>
  );
};

export default Login;