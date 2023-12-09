import React, { useState } from "react";
import "./Login.css";



const Login=()=> {
    
    const [popupStyle,ShowPopup]=useState("hide")
    
    
    const popup=()=>{
        ShowPopup("login-popup")
        setTimeout(()=>ShowPopup("hide"),3000)
    }
    return(
       
        <div className="aligment">
            
            <div className="cover">
            
                 <h1>Login</h1>
                
                <input type="text" placeholder="username"/><br/>
                <br/><input type="password" placeholder="password"/>
                
                <div className="login-btn" onClick={popup}>Login</div>
            
            
                <p className="text">Or login using</p>

                <div className="alt-login">
                        <div className="facebook"></div>
                        <div className="google"></div>
                </div>
                <div className={popupStyle}>
                   <h3> Login failed </h3> 
                    <p>username or Password incorrect</p> 
                </div>

            </div>   
            
            
         </div>
    )
        
}

export default Login; 