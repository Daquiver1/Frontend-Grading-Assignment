import React from "react";
import "./loginform.css"

const Missinggrade = () => {
    return ( 
            <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="Pin" />
        
    <div className="login-btn">login</div>

        </div>
     );
}
 
export default Missinggrade;