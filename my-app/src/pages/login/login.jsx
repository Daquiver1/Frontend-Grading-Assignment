import React from "react";
import './login.css'

function Login() {
    return (
        <div className="login-page">
            <h1 className="page-title">Log in</h1>
            <form id="login-form" action="" onsubmit="return confirm('Login Successful');">

                <fieldset>
                    <label htmlFor="student-id">
                        <p className="title">Student ID</p>
                        <input type="text" name="id" id="student-id" required placeholder="Enter Student ID"/>
                    </label>
                    <label htmlFor="pin">
                        <p className="title">Student Pin</p>
                        <input type="password" name="pin" id="pin" required placeholder="Enter Student Pin"/>
                    </label>
                </fieldset>
                <input type="submit" value="Login" id="login" />

            </form>
        </div>
    )
}

export default Login;