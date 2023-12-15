import React from 'react'
import Hero from './hero'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function HomeLayout() {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-99'>
      <Navbar />
       <Hero />
      <Footer />
    </div>
  )
}
