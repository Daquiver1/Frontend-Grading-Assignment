
import "../css/index.css";
// import  { useState } from 'react';


 const login = () => {
//     const [username, setUserId] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleLogin = (e) => {
//       e.preventDefault();
     
//     };
   return (
    <div className="log">
     <div className="password-pic">
    <img src="src/images/system2.jpg" alt=""/>
    </div> 
    <div className="login-container">
      <form className="login-form" >
        <h2>Login</h2>
        <label htmlFor="username">Student ID:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your ID"
          // value={username}
          // onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>Don&apos;t have an account? <a href="/Signup">Sign up</a></p>
      </form>
    </div>
    </div>
   )
 }

export default login