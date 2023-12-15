import React from 'react'
import './LoginSignup.css'
import user_icon from '../assests/name.png'
import id_icon from '../assests/id.png'
import password_icon from '../assests/password.png'
import { Link } from 'react-router-dom'



const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt="" />
                <input type="Name" placeholder='Name' />
            </div>
            <div className='input'>
                <img src={id_icon} alt="" />
                <input type="ID" placeholder='ID'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="Password"  placeholder='Password'/>
            </div>
            <div className='submitcontainer'>
               <Link to='/Dashboard'> <div className='submit'>Login</div></Link>
            </div>  
        </div>
       
    </div>
    
  )
}

export default LoginSignup