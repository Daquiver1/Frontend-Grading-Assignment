import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/PageStyles/Login.css"




const Login = () => {

    return (
        <div className="body">
        <div className="login-box">
            <form>
                <h3>Log In</h3>
                <label for="ID">ID :</label>
                <input type="text" id="ID" name="ID" />
                <br />
                <br />
                <label for="psw">PIN</label>
                <input type="password" id="psw" name="psw"/>
                <br />
                <button>
                    <Link to="/Pages/DashBoard"> ENTER</Link>
                </button>
            </form>
            <Outlet />
            </div>
        </div>
);
}

export default Login;
