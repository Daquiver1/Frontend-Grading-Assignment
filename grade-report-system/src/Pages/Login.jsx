import "./Login.css";

import {useState} from 'react'
const Login = () => {

    const [popupStyle, Show] = useState("main")

    const popUp =() => {
        Show ("login-popup")
        setTimeout(()=> Show("main"), 3200)

    }
    return ( 
        <div>
        
        <div className="Back">
            <h1>Login Form</h1>
            <p className="text">Already have an account?</p>

            <input type="Number" placeholder="Student ID" required/>
            <input type="password" placeholder="Pin" required/>

            <div className="LoginButton" onClick={popUp}>
                Login
            </div>
            
            <p className="CreateAccount">or <br />Create an Account</p>

            <div className={popupStyle}>
                <h3>Login Sucessful !

                </h3>
                

            </div>

          
        </div>
        <div className="footer-bar">
            <span className="span1"> 
            Having a missing grade? <br />
        
         </span>

        <span className="span2">
     Get in touch now ! 
        </span>
         
            </div>
        </div>
     );
}
 
export default Login;