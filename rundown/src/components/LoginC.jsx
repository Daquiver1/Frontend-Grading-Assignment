import "./Login.css"
import React from 'react'
import Programming from "../assets/programmingbg.jpg";
import Avatar from "../assets/avatar.jpg";


const LoginC = () => {
  return (
    <div>
        <div className="mask">
         <img className="hero-image" src={Programming} alt="hero-image" />
        </div>


        <div className="loginbox">
        <img className="hero-image" src={Avatar} alt="avatar" className="avatar" />

   <h1 className="h1">Login Here</h1>
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
