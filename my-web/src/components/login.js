import React from 'react';


function Login() {

 return (

    <div className="login-container">

      <h2>Login</h2>

      <form>

        <label>Username</label>

        <input type="text" name="username" />


        <label>Password</label>

        <input type="password" name="password" />


        <button type="submit">Login</button>

      </form>

    </div>

 );

}


export default Login;