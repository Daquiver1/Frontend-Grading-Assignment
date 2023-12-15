import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/PageStyles/Login.css";
import Dashboard from "./DashBoard";

const Login = () => {


    const [ID, setID] = useState('');
    const [pin, setPin] = useState('');
    const navigate = useNavigate();
  
    // Dummy data for authentication (replace with your actual authentication logic)
    const validCredentials = {
      validID: 'user123',
      validPin: '1234',
    };
  
    const handleSignIn = () => {
      // Check if entered credentials match the valid credentials
      if (ID === validCredentials.validID && pin === validCredentials.validPin) {
        // Navigate to the Dashboard page
        navigate('/Pages/DashBoard');
      } else {
        // Handle unsuccessful login (optional)
        console.log('Login failed. Please check your credentials.');
      }
    };


    return (
        <div className="main">
            <div className="login-box">
            <form>
                <h3>Log In</h3>
                <label for="ID">ID :</label>
                <input type="text" id="ID" name="ID" onChange={(event)=>setID(event.target.value)}/>
                <br />
                <br />
                <label for="psw">PIN</label>
                <input type="password" id="psw" name="psw" onChange={(event)=>{setPin(event.target.value)}}/>
                <br />
                <button>
                    <Link to="/Pages/DashBoard" onClick={()=>handleSignIn()}> ENTER</Link>
                </button>
                
            </form>
        
            </div>
        </div>
);
}

export default Login;
