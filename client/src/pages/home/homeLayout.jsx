import React from 'react'
import Hero from './hero'
import Prerequisites from './prerequisites'
import Signupbtn from '../../components/signupbtn'

export default function HomeLayout() {
  return (
    <>
     <Hero />
     <Prerequisites />
     <Signupbtn />
    </>
  )
}
