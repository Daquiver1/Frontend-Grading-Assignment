import React, { useState } from "react";
import "../components-css/Login.css"
import user_icon from "../components-images/person.png"
import password_icon from "../components-images/password.png"

const Login = () => {

  const [action,setAction] = useState("Sign Up");
  return (
<>
<div className="sect">
<div className="container">
  <div className="header"> 
<div className="text">
{action}
</div>
<div className="underline">
</div>
  </div>
  <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
    <img src={user_icon} alt=""/>
    <input placeholder="Name" type="text" />
  </div> }
    
  <div className="input">
    <img src={user_icon} alt=""/>
    <input placeholder="Student ID" type="pin" />
  </div>
  {/* <div className="input">
    <img src={email_icon} alt=""/>
    <input placeholder="Email" type="email" />
  </div> */}
  <div className="input">
    <img src={password_icon} alt=""/>
    <input placeholder="Pin" type="password" />
  </div>
  </div>
  {action==="Sign Up"?<div></div>: <div className="forgot-pin">Forgot your Pin? <span>Click Here!!</span></div>}
 
  <div className="submit-container">
<div className={action==="Login" ?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
<div className={action==="Sign Up" ?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
  </div>
</div>
</div>
</>
  )
   
}
export default Login