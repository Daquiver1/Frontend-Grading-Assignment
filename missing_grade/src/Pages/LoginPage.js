import React from "react";
import './Styles/login.css'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [schoolid, setSchoolid] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        if (schoolid.trim() !== "" && password.trim() !== "") {
          navigate("/grade-report");
        } else {
          window.alert("Empty Fields");
        }
      };
    

    return ( 
        <div className="login">
            <h3>Login Page</h3>
            <form>
                <div className="id">
                <label><p> School ID: </p>
                    <input type="text" id="schoolid" value={schoolid} placeholder="School ID" 
                    onChange={(e) => setSchoolid(e.target.value)} /> 
                </label>
                </div>
                <div className="password">
                <label><p> Password: </p>
                    <input type="password" id="password" value={password} placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/> 
                </label>
                </div>
                <div className="Submit">
                    <label>
                      <button onClick={handleLogin}>Login</button>
                    </label>
                </div>
            </form>
        </div>
     );
}
 
export default Login;