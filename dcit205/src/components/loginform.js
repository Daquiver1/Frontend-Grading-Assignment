import React, { useState } from 'react';
import './loginform.css';
import Navbar from "./Navbar";

const Loginform = () => {

    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className="page">
            <div className="cover">
                <h1>Login</h1>
                <input type='text' placeholder='Student ID' className='iinput'/>
                <input type='password' placeholder='PIN' className='iinput'/>

                <div className='login-btn' onClick={popup}>Login</div>

                <div className={popupStyle}>
                    <h3>Login failed</h3>
                    <p> Username or password incorrect </p>
                </div>

            </div>
        </div>
        <footer>
            <p>&copy; 2023 Our Website. All rights reserved.</p>
        </footer>
    </div>   
  )
}

export default Loginform 
