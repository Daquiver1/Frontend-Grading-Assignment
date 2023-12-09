import React from "react";
import PersonImage from '../Assets/person.png'
import PasswordImage from '../Assets/password.png'
import './login.css';
const login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <img src={PersonImage} alt="Person" />
        <div className="input">
          <input type="text" placeholder="Student ID" />
        </div>
        <img src={PasswordImage} alt="Password" />
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
