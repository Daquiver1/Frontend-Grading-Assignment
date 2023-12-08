import  React from 'react';
import '../styles/logincss.css';
import mail_icon from './images/mail.jpeg'
import user_icon from './images/usre.jpeg'
import pass_icon from './images/pass.jpeg'

const Login = () =>{
    return(
        <div className="container">
            <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={mail_icon} alt="" />
                <input type="email" />
            </div>
            <div className="input">
            <img src={pass_icon} alt="" />
                <input type="password" />
            </div>
       </div>
       <div className="forget-password">Forget Password?<span>Click Here!</span></div>
       <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">login</div>
       </div>

        </div>
    )
}
export default Login;