
import "../css/index.css";
 import  { useAuth0 } from '@auth0/auth0-react';


 const login = () => {
  const {loginWithRedirect ,isAutheticated} = useAuth0();
 
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
         
          required
        />

        isAuthenticated &&(

          <button type="submit" onClick={() => loginWithRedirect()}>
            
            Login</button>


        )

        <p>Don&apos;t have an account? <a href="/Signup">Sign up</a></p>
      </form>
    </div>
    </div>
   )
 }

export default login