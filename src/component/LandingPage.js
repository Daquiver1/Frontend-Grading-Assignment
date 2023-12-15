// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Company Name</h1>
        <p>Welcome to our amazing platform!</p>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Login</li>
          <li>GradeReport</li>
          <li>IntructorContact</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Join Us Today!</h2>
        <p>Unlock the power of our platform and experience greatness.</p>
        <button onClick={() => redirectToSignUp()}>Sign Up Now</button>
      </section>

      <footer>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

function redirectToSignUp() {
  // Redirect to your sign-up page or perform any other action
  window.location.href = 'signup.html';
}

export default App;
