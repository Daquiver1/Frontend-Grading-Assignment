import React from "react";
import "./Login.css";



const Login=()=> {
    return(
        <div
        className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}
        >
            <h3 className="ui header"></h3>
            <form className="ui form">
            <div className="field">
                <div className="container">
                    <div className="header">
                        <div className="text">Login</div>
                        <div className="underline"></div>
                <input type="text" placeholder="search..."/>
                {/* <i className="search icon"></i> */}
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
        
}

export default Login; 