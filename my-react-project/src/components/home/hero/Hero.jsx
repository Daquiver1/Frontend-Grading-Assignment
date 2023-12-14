import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <p>Welcome to Our Website. Here you get to check for your results and also check for missing ones. 
              We are responsible for all thingsrelated to your grades as students and if you have any issues you
               can get our contact info and also lear n more a bout us.</p>
          <div className="button">
            <button className='primary-btn'>
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
            </button>
          </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero