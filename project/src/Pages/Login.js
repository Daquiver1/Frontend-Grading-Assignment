import React from 'react'
import './Login.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route , Switch, Link , Redirect  } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import Dashboard from './Dashboard';



const Login = () =>{
    
    
    return(
        <>     
        
           

        
        <div className='content-container'>
        <div className='overlay'>
        <div className='cover'>
                <h1>Login</h1>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <ReactBootStrap.Nav.Link href="/Pages/Dashboard"> <div className='Login-btn'> Login</div></ReactBootStrap.Nav.Link>
        </div>
        </div>
        </div>
            </>
    )
}


export default Login;