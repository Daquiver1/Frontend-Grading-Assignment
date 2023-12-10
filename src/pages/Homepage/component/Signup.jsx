import "../css/index.css";
// import {  useState } from "react-router-dom"
// import  { useState } from 'react';

const signup = () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword ,setconfirmPassword] = useState('');

//   const handleSignup = (e) => {
//     e.preventDefault();
   
  //};
  return (



    <div className="log">
     <div className="password-pic">
    <img src="src/images/sys.jpg" alt=""/>
    </div> 
    <div className="login-container">
      <form className="login-form" >
        <h2>Signup</h2>
        <label htmlFor="username">Student ID:</label>
        <input
          type="text"
          id="username"
          // placeholder="Enter your ID"
          // value={userId}
          // onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          // placeholder="Enter your password"
          id="password"
          // value={confirmPassword}
          // onChange={(e) => setconfirmPassword(e.target.value)}
          required
        />
       


        <label htmlFor="password">Confirm Password:</label>
        <input
          type="password"
          // placeholder="Confirm your password"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />

        


        <button type="submit">Signup</button>

        <p>Already have an account? <a href="/Login">Log in.</a></p>
      </form>
    </div>
    </div>
  )
}

export default signup