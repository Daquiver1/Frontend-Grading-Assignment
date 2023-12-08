import { useState } from "react";

const Login = ({islogin}) => {
    console.log(islogin)
    return (
            <>
            <div className="loginForm">
                <div className="inputs_btns">
                    <center><div className="title">Login</div></center>
                    <div className="inputs">
                        <span>Student ID :</span>
                        <input className="studenID" placeholder="Enter student ID..." />
                        <span>Password :</span>
                        <input className="password" placeholder="Enter password.." />
                    </div>
                    <div className="btn" onClick={() => {
                       islogin(true)
                    }}>
                        <span>Login</span>
                    </div>
                </div>
            </div>
            </>
    );
}
 
export default Login;