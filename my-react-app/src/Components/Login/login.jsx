import React from "react";
import PersonImage from '../Assets/person.png'
import PasswordImage from '../Assets/password.png'
import './login.css';
const login = () => {
  return (
    <div className="container_login">
      <div className="header_login">
        <div className="text_login">Login</div>
      </div>
      <div className="inputs_login">
        <img src={PersonImage} alt="Person" />
        <div className="input_login">
          <input type="text_login" placeholder="Student ID" />
        </div>
        <img src={PasswordImage} alt="Password" />
        <div className="input_login">
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot_login">
        Forgot password? <span>Click here!</span>
      </div>
      <div className="submit-container_login">
        <div className="submit_login">
          Login
        </div>
      </div>
    </div>
  );
};

export default login;
