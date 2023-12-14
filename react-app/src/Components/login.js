import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import Navbar from "./Navbar";
import Footer from "./Footer";




const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateStudentId = () => {
    if (studentId.length !== 8) {
      setErrorMessage("Student ID must be 8 numbers.");
      return false;
    }
    return true;
  };

  const validatePin = () => {
    if (pin.length !== 4) {
      setErrorMessage("PIN must be 4 numbers.");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    setErrorMessage("");
    if (validateStudentId() && validatePin()) {
      console.log("Login successful!");
      navigate("/Dashboard");
    }
  };

  const handleSignUp = () => {
    setErrorMessage("");
    setIsSignUp(!isSignUp);
  };

  return (
    <>
    <Navbar />
    <div className='container'>
      <div className='header'>
        <div className="text">
          {isSignUp ? "Sign Up" : "Login"}
        </div>
        <div className="underline"></div>
        <div className="inputs">
          {isSignUp ? (
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Name"
              />
            </div>
          ) : null}
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              placeholder="Student Id"
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Pin"
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
        </div>
        {isSignUp ? null : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="submit-container">
          <div
            className="submit"
            onClick={isSignUp ? handleSignUp : handleLogin}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </div>
          <div
            className="submit gray"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
