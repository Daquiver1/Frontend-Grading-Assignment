import React, { useState } from "react";
import "./loginform.css";
import { FaCheckCircle } from 'react-icons/fa';

const LoginForm = () => {

    const[popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => {
            showPopup("hide")
        }, 3000)
    }

    return (
        <div className="login-cover">
            <h1>Login</h1>
            <div>Student ID &nbsp;
            <input type="text"/>
            </div>

            <div>PIN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="Password"/>
            </div>

            <div className="login-button" onClick={popup}>Login</div>

            <div className="pass-reset">Forgot Your Password?</div>

            <div className={popupStyle}>
                <h3>Welcome</h3>
                <br/>
                <FaCheckCircle style={{fontSize:"45px"}}/>
                <br/>
                <p>Login Successful</p>
                </div>

        </div>
    )
}

export default LoginForm;