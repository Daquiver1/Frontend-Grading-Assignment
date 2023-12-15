// LoginPage.js
import React, { useState } from "react";
import legonlogo from '../assets/legonlogo.jpeg'
import { NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
    const [pin, setPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      console.log(studentId, pin);
      if (parseInt(studentId) === 12345 && parseInt(pin) === 1111) {
        navigate("/dash")
      } else {
        setErrorMessage("Invalid Student ID or PIN. Please try again.");
      }
      };

  return ( 
    <body className="body">
    <div>
    <div className="container">
      <img src={legonlogo} class="image" alt="" />
      <hr/>
      <br/>
      <form onSubmit={handleLoginSubmit}>
        <label for="studentId"><b> Student ID:</b></label>
        <input type="number" id="studentId" onChange={(e) => setStudentId(e.target.value)} required />
  
        <label for="pin"><b>PIN:</b></label>
        <input type="number" id="pin" onChange={(e) => setPin(e.target.value)} required />
  
        <div className="button-container">
        <button type="submit">Log In</button>
        <button><NavLink to="/" className="cancel">Cancel</NavLink></button>
        </div>
      <p class="forgot"><NavLink to="../">Forgot Password?</NavLink></p>
      </form>
      {errorMessage && <p class="error-message" id="error-message">{errorMessage}</p>}
    </div>
    </div>
    </body>
  );
};

export default LoginPage;