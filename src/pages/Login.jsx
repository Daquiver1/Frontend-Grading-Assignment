import React from 'react'
import Navbar from '../components/Navbar'
import './Login.css'



export const Login = () => {
    const imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fadmission.ug.edu.gh%2F&psig=AOvVaw3wzMcmJU3u_6mEznl7kTYC&ust=1702620087999000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiMnqCgjoMDFQAAAAAdAAAAABAI.png';

    return(
        <>
            <Navbar></Navbar>
            <home  style={{backgroundImage:'url(${imageUrl'}} >
            <p style={{fontFamily:"arial,sans-serif",backgroundImage:"linear-gradient(-90deg, #DCCA9C 0%, #2E4975 100%);",textAlign:"center",boxSizing:"border-box"}}>UNIVERSITY OF GHANA</p>
            <div sclassName="loginDesign">
               <form class= "login-form">
               <label style={{ textAlign: "left" }} htmlFor="idNumber">
            ID Number
          </label>
          <input type="text" placeholder="Your ID Number" id="idNumber" />
                  <label for="password"> password</label>
                  <input type="password" placeholder = "**************" id="email" name="email" />
                  <button> Login</button>
                  <br></br>
                  <text className="link-btn">Don't have an Account? Register here.</text>
               </form>

                 
            
            </div>
            </home>
            
           
        </>
    );
};
