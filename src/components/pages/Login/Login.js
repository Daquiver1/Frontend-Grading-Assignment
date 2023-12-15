import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLock } from "react-icons/md";

const Login = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Add your authentication logic here
    console.log("Form submitted with:", { username, password });

    // Optionally, you can clear the form fields after submission
    event.target.reset();
  };

  return (
      <div className="background">
    <div className="login-container ">
      <h2>Login</h2>

      <form onSubmit={handleFormSubmit}>
      <div class="input-box">
        <IoPerson />
        <input type="text" name="username" placeholder="Username" required />
        </div>

        <div class="input-box">
          <MdLock />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        </div>
        <Link to="/Dashboard">

        <button type="submit">Login</button>
        </Link>
      </form>
      </div>
    </div>
  );
};

export default Login;
