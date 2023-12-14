import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/PageStyles/Login.css";
import Dashboard from "./DashBoard";

const Login = () => {



    var [pin, setPin] = useState();
    var [iD, setID]   = useState("")
    var [authState, setAuthState] = useState("N/A")


    
    const SignIn= () =>{
        if (pin===undefined || iD===undefined){
            setAuthState("False")
        }
        else {
            setAuthState("True")
        }
    }


    return (
        <div className="main">
        <div className="login-box">
        {(authState==="True")?(
            <Dashboard />
        ):(
            <form>
                <h3>Log In</h3>
                <label for="ID">ID :</label>
                <input type="text" id="ID" name="ID" onChange={(event)=>setID(event.target.value)}/>
                <br />
                <br />
                <label for="psw">PIN</label>
                <input type="password" id="psw" name="psw" onChange={(text)=>{setPin(text.target.value)}}/>
                <br />
                <button>
                    <Link to="/Pages/DashBoard" onClick={()=>SignIn()}> ENTER</Link>
                </button>
                {(authState==="False")?(
                    <p>Incomplete or Incorrect ID or PIN</p>
                ):(
                    <p></p>
                )}
            </form>
        )}
            </div>
        </div>
);
}

export default Login;
