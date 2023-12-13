// Login.js

import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div>
      <header>
        <h2>Login to Your Account</h2>
      </header>
      <nav>
        <a href="/landing page">Home</a>
        <a href="/login page">Login</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/grade-report">Grade Report</a>
        <a href="/missing-grade-form">Report Missing Grade</a>
        <a href="/instructor-contact">Instructor Contact</a>
        <a href="/help-support">Help & Support</a>
      </nav>
      <main>
        <section>
          <p>
            Welcome back! Log in with your student ID and PIN to uncover the secrets of your grades and report any missing ones.
          </p>
          {/* Login Form */}
          <form>
            <label htmlFor="studentID">Student ID:</label>
            <input type="text" id="studentID" name="studentID" required />

            <label htmlFor="pin">PIN:</label>
            <input type="password" id="pin" name="pin" required />

            <button type="submit">Login</button>
          </form>
          {/* End of Login Form */}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GradeTracker - Your Academic Companion</p>
      </footer>
    </div>
  );
};

export default Login;
