import React, { useState } from 'react';
import "./styles/login.css"
import LoginBackground from "../Assets/login.avif";


function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
 };

 return (


  <div className="login-section-container">
  <div className="login-background-image-container">
    <img src={LoginBackground} alt="" />
  </div>
  
  <div className="login-section-text-container">
    <h1 className="login-heading">
Login Here!     </h1>
  
    </div>
    
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Student ID</label>
        <input
          type="text"
          placeholder="Student ID"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Pin</label>
        <input
          type="password"
          placeholder="Pin"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button">{loading ? 'Loading...' : 'Log In'}</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
    </div>
 );
}

export default Login;