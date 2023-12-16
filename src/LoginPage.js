import React from 'react' 
import './App.css';
import { Outlet, Link } from 'react-router-dom';


function LoginPage() {
    return (
        <div className='App'>
         <div className='login-box'>
                <form className='auth-form'>
                    <h3>Users Login Credentials</h3>
                    <label for="studentId">Student Number:</label> <br></br>
                    <input type='text' placeholder='enter id' /> <br></br>
                    <label for="pin"> Pin: </label><br></br>
                    <input type='pin' placeholder='enter pin'/><br></br>
                    <Link to="/LandingPage">
                       <input className='login-button' type="submit" value="Login"/>
                    </Link>

                    <div class="action-area">
                        <div class="auth-link-section">
                            <div class="forget-pass-div">
                                <p>Forget your password?<a href="url"> reset your password</a></p>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
           

        </div>
        
    );
}

export default LoginPage;                  