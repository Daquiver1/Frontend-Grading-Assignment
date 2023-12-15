import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const mockStudentId = "12345";
    const mockPin = "6789";

    if (studentId === mockStudentId && pin === mockPin) {
      alert("Login Successful!");
    } else {
      setErrorMessage("Invalid Student ID or PIN. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2> Student Login </h2>{" "}
      <div className="login-form">
        <label htmlFor="studentId"> Student ID: </label>{" "}
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <label htmlFor="pin"> PIN: </label>{" "}
        <input
          type="password"
          id="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button onClick={handleLogin}> Login </button>{" "}
        {errorMessage && <p className="error-message"> {errorMessage} </p>}{" "}
      </div>{" "}
    </div>
  );
};

export default LoginPage;
