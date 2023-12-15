import React, { useState } from "react";
import "./login.css";
import Header from './Header';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulation
    if (username === "exampleuser" && password === "password123") {
      setLoggedIn(true);
      alert("Logged in successfully!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
	<Header />
      <h1>Login.</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
