import React from 'react';

function Login() {
  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <form id="login-form" method="post">
        <div className="form-group">
          <label htmlFor="student-id">Student ID</label>
          <input type="text" id="student-id" name="student-id" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <input type="submit" value="Log In" />
        </div>
      </form>
      <div className="forget-password">
        <a href="#" id="forget-password-link">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;