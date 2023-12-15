import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./Login.css";

function Login() {
  const [id, setID] = useState("");
  const [pin, setPIN] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const testID = '11253339';
    const testPIN = '45678';

    if (id === testID && pin === testPIN) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Details. Please check your inputs and try again.');
    }
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div>
      <br />
      <div className="login-page">
        <div className="login-tab">
          <h1 className="title">WELCOME BACK!</h1>
          <h3 className="sub-text">Login to continue</h3>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder="Student ID"
              type="text"
              value={id}  
              onChange={(e) => setID(e.target.value)}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={pin}  
              onChange={(e) => setPIN(e.target.value)}
            />
            <button className="submit" type="submit">
              Submit
            </button>

            <p className="forgot">Forgot password?</p>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Login;
