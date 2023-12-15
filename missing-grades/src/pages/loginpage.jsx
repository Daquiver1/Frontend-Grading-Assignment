import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './loginpage.css';

const loginpage = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
      showPopup("login-popup")
      setTimeout(() => showPopup("hide"), 3000)
  }

return (
  <div>
      <div>
           
      </div>
      <div className="page">
          <div className="cover">
              <h1>Login</h1>
              <input type='text' placeholder='Student ID' className='input-area'/>
              <input type='password' placeholder='PIN' className='input-area'/>

              <div className='login-btn' onClick={popup}>LOGIN</div>

              <div className={popupStyle}>
                  <h3>LOGIN FAILED!!</h3>
                  <p> Username or password incorrect </p>
              </div>

          </div>
      </div>
      
      <footer>
      <nav>
        <Link to="/dashboard">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Terms & Conditions</Link>
      </nav>
      <p>&copy; 2023 University Of Ghana. All rights reserved.</p>
    </footer>
  </div>   
);
};

export default loginpage;