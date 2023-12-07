import React from "react";
import "../Styles/PageStyles/Login.css"




const Login = () => {

    return (
        <div className="body">
        <div className="login-box">
            <style>{'body { background-color: #d9d9d9; }'}</style>
            <form>
                <h3>Log In</h3>
                <label for="ID">ID :</label>
                <input type="text" id="ID" name="ID" />
                <br />
                <br />
                <label for="psw">PIN</label>
                <input type="password" id="psw" name="psw"/>
                <br />
                <button onClick> ENTER </button>
            </form>
        
            </div>
        </div>
);
}

export default Login;
