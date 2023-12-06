import React from "react";
import './login.css';
const login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Name" />        
        </div>
        <div className="input">
          <input type="text" placeholder="Student ID" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot">
        Forgot password? <span>Click here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">
          Login
        </div>
      </div>
    </div>
  );
};

export default login;
