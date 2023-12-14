import React, { useState } from 'react';
import './log.css'; // import your css file
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

function Login() {
    const [isLoginFormActive, setLoginFormActive] = useState(true);

    const handleClick = () => {
      setLoginFormActive(!isLoginFormActive);
    };
  
  return (
    <div>
        <Navbar></Navbar>
    <div className="full-page">
        <h1 className='login'>Login Page</h1>
      <div className="sub-page">
        <div className="row">
          <div className="col-1">
            <div className="form-box">
              <div className={`form ${isLoginFormActive ? 'login-form' : 'register-form'}`}>
                {isLoginFormActive ? (
                  <form>
                    <center><h1 className="main-heading">Login Form</h1></center>
                    <input type="text" placeholder="student id"/>
                    <input type="password" placeholder="password"/>
                    <button>LOGIN</button>
                    <p className="message">Staff? <a href="#" onClick={handleClick}>Login</a></p>
                  </form>
                ) : (
                  <form>
                    <center><h1 className="main-heading">Register Form</h1></center>
                    <input type="text" placeholder="staff name"/>
                    <input type="text" placeholder="staff-id"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign in</button>
                    <p className="message">Student?<a href="#" onClick={handleClick}>Login</a></p>
                  </form>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Login;
