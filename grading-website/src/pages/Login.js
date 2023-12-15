import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import "../components/Login.css";

function Login() {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Mock authentication function
    if (studentId === "11019735" && pin === "1234") {
      setAuthenticated(true);
      setError("");
      navigate("/dashboard");
    } else {
      setAuthenticated(false);
      setError("Invalid student ID or PIN");
    }
  };

  const backgroundImage = (
    <>
      <img src={process.env.PUBLIC_URL + "./images/login-image.jpg"} />
    </>
  );

  const pageContent = (
    <>
      {!authenticated ? (
        <div className="student-login-details">
          <div className="student-id-container">
            <input
              type="text"
              placeholder="Student ID"
              required="required"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <div>Please fill out this field</div>
          </div>
          <div className="student-pin-container">
            <input
              type="text"
              placeholder="Pin"
              required="required"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <div>Please fill out this field</div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Welcome, {studentId}!</h2>
          {/* Add redirection logic or any authenticated user content here */}
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
      <div className="submit-button-container">
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage={backgroundImage}
        pageContent={pageContent}
      />
    </>
  );
}

export default Login;
