import React from 'react';
import '../components/Login.css';
import school_logoImage from '../images/school_logo.png';

function AppLogin() {
  return (
    <html>
      <body className='main'>
        <div className='main-container'>
          <p className='title'>LOGIN</p>
          <p className='info'>Please enter your school ID and password!</p>

          <div className='form-group'>
            <input className='form-control' type='text' placeholder='School ID' />
          </div>

          <div className='form-group'>
            <input className='form-control' type='password' placeholder='Pin' />
          </div>

          <button className='btn btn-primary go-button'>
            GO
          </button>
        </div>
      </body>
    </html>
  );
}

export default AppLogin;
