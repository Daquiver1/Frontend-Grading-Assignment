import React from 'react';

import heroVid from '../assets/vid-bg.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Welcome</h1>
        <h1 className='py-2'>
        Welcome to our platform dedicated to helping students manage and report missing grades effectively. 
        </h1>
        <div>
          <button className='m-2'>Get Started</button>
          <button className='m-2'>FAQ</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>Ready to take control of your academic journey? Login!</p>
      </div>
    </div>
  );
};

export default Hero;