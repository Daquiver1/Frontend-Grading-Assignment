import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId.length === 8 && pin.length === 5) {
    } else {
      setError("Invalid Student ID or PIN. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="student-id">Student ID:</label>
          <input
            type="text"
            id="student-id"
            name="student-id"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
          <br />
          <label htmlFor="pin">PIN:</label>
          <input
            type="password"
            id="pin"
            name="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
          <br />
          <Link to="/home">
            <button type="submit">Login</button>
            </Link>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
