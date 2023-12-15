import React from 'react';
import './HeroSection.css';
 


function HeroSection({backgroundImage,pageContent}) {
  return (
    <>
  <div className='hero-container'>
    {backgroundImage}
    </div>
    <div>{pageContent}</div>

    </>
  )
}

export default HeroSection;
