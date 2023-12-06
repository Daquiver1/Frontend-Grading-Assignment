import React from 'react'
import './Login.css'
import { Container } from 'react-bootstrap';

const Login = () =>{
    return(
        <>      
        <div className='content-container'>
        <div className='overlay'>
        <div className='cover'>
                <h1>Login</h1>
                <input type='text' placeholder='ID' />
                <input type='password' placeholder='Pin' />
                <div className='Login-btn'>Login</div>
        </div>
        </div>
        </div>
            </>
    )
}


export default Login;