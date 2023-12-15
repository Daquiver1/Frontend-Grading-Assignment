import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Background from '../pages/Background'

export default function Home() {
  return (
    <div>
    <Navbar/>
      <div><Background /></div>
      <Footer/>
    </div>
  )
}
