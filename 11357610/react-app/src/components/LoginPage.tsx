import React from "react";
import "./LoginPage.css"; // Import the corresponding CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      <form id="login-form" action="login.php" method="post">
        <img src="/img/CS_logo.png" className="logo" alt="" />
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">PIN:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
