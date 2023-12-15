import React from "react";
import "./login.css"
import Footer from "./footer";
import Header from "./header";


export default function Login(){
    return (
        <div className="body"> 
            < Header/>
            <div className="login-container">
                <h2 className="login"> 
                    Login
                </h2>
                <form action="/login" method="post">
                    <div className="input-group">
                        <label className="username" for="username">Student Id:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label className="password" for="password">Pin:</label>
                        <input type="password" id="password" name="password" required/>
                        <button type="submit">Login</button>                    
                    </div>

                </form>
            </div>
            <Footer/>
        </div>
        
        
    )
}
