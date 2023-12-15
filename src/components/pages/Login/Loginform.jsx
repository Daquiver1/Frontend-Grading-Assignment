import React from "react";
import './Loginform.css';



const LoginForm = () => {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Student ID" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;