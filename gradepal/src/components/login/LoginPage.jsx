import React, { useState } from "react";
import "./loginpage.css"; // Css file

const LoginPage = ({ setAuthenticated }) => {
  // State variables
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  // Handle login function
  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate authentication (Replace with actual authentication logic)
    if (studentId === "sampleUser" && pin === "1234") {
      setAuthenticated(true);
      setSuccessMessage("Login successful!"); // Set success message
    } else {
      setError("Invalid credentials. Please try again.");
      setSuccessMessage(""); // Clear success message if there was an error

      // Clear error message after 3 seconds (example)
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-heading">Login to Your Account</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <form onSubmit={handleLogin}>
          {/* Student ID input */}
          <div className="form-group">
            <input
              type="text"
              className="input-field"
              placeholder="Student ID"
              name="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>

          {/* PIN input */}
          <div className="form-group">
            <input
              type="password"
              className="input-field"
              placeholder="PIN"
              name="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
