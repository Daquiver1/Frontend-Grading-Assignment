import React from 'react';
import './App.css';


const Login = () => {
  return(
<div>
    <div class="login-container">
        <h1>Login</h1>
        <form />
            <label for="student-id" />Student ID:
            <input type="text" id="student-id" name="student-id" placeholder="Enter your student ID" required /><br />
<p></p>
            <label for="pin" />PIN:
            <input type="password" id="pin" name="pin" placeholder="Enter your PIN" required /><br />
<p></p>
            <button class="GFG"
                    onClick="window.location.href = '#';">
                Login
            </button><br />
            <p></p>
            <a href="#">Back</a>
      
        
    </div>
</div>


  );
};
export default Login;


