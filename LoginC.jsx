import "./Login.css"
import React from 'react'
import picture from "../assets/lady.webp";



const LoginC = () => {
  return (
    <div>
        <div className="mask">
         <img className="hero-image" src={picture} alt="hero-image" />
        </div>


        <div className="loginbox">
       

   <h1 className="h1">LOGIN FORM</h1>
<form className="form1">
    <p>Student ID</p>
    <input type="text" name="" placeholder="Enter Student ID" required />
    <p>PIN</p>
    <input type="password" name="" placeholder="Enter PIN Here" required />
    <input type="Submit" className="log" name="" value="login" />
       
</form>
</div>




    </div>
  )
}

export default LoginC
