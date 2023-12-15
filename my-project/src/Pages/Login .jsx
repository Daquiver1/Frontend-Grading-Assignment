import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your authentication logic here
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Navigate to the home page
      navigate("./Pages/Home");
    } else {
      // Handle failed login (show error message, etc.)
      console.log("Login failed");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <h2>Login</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px" }}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "20px", padding: "8px" }}
          required
        />

        <button
          type="button"
          onClick={handleLogin}
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
