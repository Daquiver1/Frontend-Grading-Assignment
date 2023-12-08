import React, { useState, useRef, useEffect } from "react";
import "../components/Login/Login.css";
import userIcon from "../assets/person.png";
import passwordIcon from "../assets/password.png";
import { Link } from "react-router-dom";

function Login({ onSignIn }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const passwordInputRef = useRef(null);

  useEffect(() => {
    // Set cursor position to the middle when the component mounts
    const middle = Math.floor(password.length / 2);

    // Check if the password input is focused before setting cursor position
    if (document.activeElement === passwordInputRef.current) {
      passwordInputRef.current.setSelectionRange(middle, middle);
    }
  }, [password]);

  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulating a basic login check
    if (userId === "student123" && password === "password123") {
      // Reset error state
      setError("");

      // Call the onSignIn prop to update the route
      onSignIn();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <div className="welcome">
        <h1>Ride the Wave of Knowledge: </h1>
        <p>Log in to AcademiaWave!"</p>
      </div>
      <div className="container">
        <div className="header">
          <div className="text">Log In</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Student ID"
              name="email-address"
              id="email-address"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              ref={passwordInputRef}
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // ref={passwordInputRef}
              // style={{ textAlign: "center" }}
            />
          </div>
        </div>
        <div className="forgot-password">
          Reset Password <span>Click Here</span>
        </div>
        <div className="submit-container">
          <Link className="submit" to="/home ">
            {" "}
            <input
              className=""
              type="submit"
              value="Log In"
              onClick={handleSignIn}
            />
          </Link>
          <div className="submit1">Cancel</div>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
}

export default Login;
