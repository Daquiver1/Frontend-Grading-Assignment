import React from 'react'
import Navbar from '../components/Navbar'
import './Login.css'


export const Login = () => {
    return(
        <>
            <Navbar></Navbar>
            <div sclassName="loginDesign">
               <form class= "login-form">
                  <label style={{textAlign:"left"}} for="email">email</label>
                  <input type="email" placeholder= "your email@gmail.com" id="email" />
                  <label for="password"> password</label>
                  <input type="password" placeholder = "**************" id="email" name="email" />
                  <button> Login</button>
               </form>
                 <button className="link-btn">Don't have an Account? Register here.</button>
            
            </div>
           
            
           
        </>
    );
};
