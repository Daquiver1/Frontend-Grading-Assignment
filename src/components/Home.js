import React from 'react'

import legonlogo from '../assets/legonlogo.jpeg';

const Home = () => {
  return (
    <div>
    <header>
    <div className='title'>
      <img src={legonlogo} alt='' />
      <span>UG | GRADE REPORT SYSTEM.</span>
    </div>
    </header>
    </div>
  )
}

export default Home