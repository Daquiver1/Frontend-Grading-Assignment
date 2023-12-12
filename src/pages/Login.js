import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import './Login.css';
import LogUserImage from '../LogUser.jpg';

function Login() {
  const history = useHistory(); // Get the history object

  const handleSignIn = () => {
    // Perform any authentication logic here
    // For now, let's just navigate to the Dashboard
    history.push('/dashboard');
  };

  return (
    <div>
      <h2>Login Form</h2><br></br><br></br>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form>
            <h1>Login</h1>
            <label htmlFor="email-signin">Student ID</label>
            <input type="email" id="email-signin" placeholder="ID" />
            <label htmlFor="password-signin">Student PIN</label>
            <input type="password" id="password-signin" placeholder="PIN" />
            <a href="#">Forgot your password?</a>
            <button type="button" onClick={handleSignIn}>Sign In</button>
          </form>
        </div>
      </div>
      <img src={LogUserImage} alt="LogUser" className="login2" />
    </div>
  );
}

export default Login;
