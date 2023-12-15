import React, { useState } from "react";
import './login.css';

import { Link } from "react-router-dom"; 

function Login() {
    const [studentId, setStudentId] = useState("");
    const [studentPin, setStudentPin] = useState("");

    const handleIdChange = (e) => {



        
        setStudentId(e.target.value);
    };

    const handlePinChange = (e) => {
        setStudentPin(e.target.value);
    };

    return (
        
        <div className="container">
            <form>
                <h1>Login Required</h1>
                <label htmlFor="id">STUDENT ID:</label>
                <input type="text" id="id" value={studentId} onChange={handleIdChange} />
                
                <label htmlFor="pin">PIN:</label>
                <input type="password" id="pin" value={studentPin} onChange={handlePinChange} />
                <Link to="/dashboard">
                 {" "}
                <button className="tap" >Log-in</button> 
                 </Link>
                <h4>Forgot password?</h4>
            </form>
        </div>
    );
}

export default Login;
