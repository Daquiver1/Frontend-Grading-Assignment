import React from "react";
import './login.css'

function Login() {
    return (
        <div className="login-page">
            <h1 className="page-title">Login page</h1>
            <label htmlFor="student-id">
                Student ID
                <input type="text" name="id" id="student-id" required placeholder="Enter Student ID"/>
            </label>
            <label htmlFor="pin">
                Student Pin
                <input type="password" name="pin" id="pin" required placeholder="Enter Student Pin"/>
            </label>
            <button id="login">Login</button>
        </div>
    )
}

export default Login;