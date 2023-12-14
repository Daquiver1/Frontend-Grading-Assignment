import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="l-container">
      <div className="login-form">
        <h1 className="login-text">L o g i n</h1>
        <form action="">
          <input className="input-text" type="text" placeholder="ID" />
          <br />
          <input className="input-text" type="text" placeholder="PIN" />
        </form>
        <button className="login-button">Login</button>
        <p className="forgot">Forgot your PIN? <Link className="click-here">Click here</Link></p>
      </div>
    </div>
  );
};
