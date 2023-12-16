import React from 'react'
import Hero from '../Components/Hero';

import Overview from '../Components/Overview';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

function Landingpage() {
  return (
    <div>
       <Navbar />
      <Hero />
      <Overview />
      <Cards />
      <Footer />
    </div>
  )
}

export default Landingpage