import React from 'react';
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Your login logic

    // After successful login, navigate to the dashboard
    navigate('/dashboard');
  };
  return (
    
    
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className='form_container p-5 rounded bg-white'>
        <form>
          <h3 className='text-center mb-4'>Sign In</h3>
          <div className='mb-3'>
            <label htmlFor='studentId' className='form-label'>Student ID</label>
            <input type="studentId" placeholder='Enter Student ID' className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" placeholder='Enter Password' className='form-control' />
          </div>
          <div className='mb-3 form-check'>
            <input type="checkbox" className='form-check-input' id="check" />
            <label htmlFor="check" className='form-check-label'>
              Remember Me
            </label>
          </div>
          <div className='d-grid'>
          <button onClick={handleLogin} className='btn btn-primary'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
