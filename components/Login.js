import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/login.css';

function Login(){
  return(
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg.primary">
        <div className='form_container p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'>
            <label htmlFor='studentId'>StudentId</label>
            <input type="studentId" placeholder='Enter StudentId' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor="password"> Password </label>
            <input type="password" placeholder='Enter Password' className='form-control'/>
          </div>
          <div className='mb-2'>
          <input type="checkbox"  className='custom-control custom-checkbox' id="check"/>
          <label htmlFor="check" className='custom-input-label ms-2'>
            Remember Me
          </label>
          </div>
       <div className='d-grid'>
        <button className='btn btn-primary'>Sign In</button>
        </div>
        <div class=".bg-dark.bg-gradient"></div>
        </form>
        </div>
        </div>

  );
}

export default Login;