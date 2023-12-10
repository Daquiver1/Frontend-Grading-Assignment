import React from "react";
import "./loginform.css"

const Loginform = () => {
    return (
        <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="Pin" />
        </div>
    )
}

export default Loginform