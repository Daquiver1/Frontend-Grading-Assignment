import React from 'react';
import '../components/Login.css';
import school_logoImage from '../images/school_logo.png';


function Login() {
   return(
    <html>
      <body className='main'>
        <div className='main-container'>
          <p className='title'>LOGIN</p>
          <p className='info'>Please enter your school ID and password!</p>
          <input className='first' type='text' placeholder='School ID'>
          </input>

          <input className='second' type='text' placeholder=' Pin'>
          </input>


        </div>

      </body>
    </html>
   )
}

export default Login;