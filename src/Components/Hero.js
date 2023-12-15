import React from 'react'
import Button from './Button';
import {Link} from 'react-router-dom'

//This is the hero section of the landing and home page.

const Hero = () => {
  return (
    <div>
      <div className='p-5 pt-[4rem] bg-white w-full md:py-44'>
        <div className='max-w-[1480px] mx-auto grid md:grid-cols-2'>

          <div className='md:pl-8 md:pt-8'>
            <p className='text-3xl font-bold mb-4'>Welcome to the<br />Missing Grade Reporting System</p>
            <p className='text-xl mb-8'>Our system provides a seamless way for students to track,
              report, and manage missing grades in their academic profiles.
              With a user-friendly interface, real-time alerts, and secure
              authentication, you can take control of your academic progress
              like never before.</p>
            <div className='text-xl'>

            {/* This is the login button  */}

              <Link to="/Login">
                <Button>
                  Login Now
                </Button>
              </Link>

            </div>
          </div>

          <img src={require('../assets/Heroimg.png')} alt="HeroImg" className='w-full max-w-none h-auto mx-auto md:ml-0 md:mt-0 mt-8' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
