import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import LoginForm from './loginform'

const Hero = () => {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToContacts = () => {
    navigate('/dashboard/help-and-support');
  };

  return (
    <React.Fragment>
      <section>
        <div>
          <div className='centered'>
            <div>
              <p style={{color:'white'}}>Your Foundation To Build A Reliable Future</p>
            </div>
            <div>
              <button className='hero-btn' onClick={navigateToLogin}>Login</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='hero-btn' onClick={navigateToContacts}>
              Contact
              </button>
            </div >
          </div>
        </div>
      </section>
    </React.Fragment>

  )
}

export default Hero