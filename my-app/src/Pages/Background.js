import React from 'react'
import Image from './Photo/security.jpg'
import '../Pages/Background.css'

function Background() {
  return (
    <div>
      <img className='background-image' src={Image} alt=''/>
      <div className="text-over-image">
       <h1>Thisa front-end web application for a Student Grade Reporting System. It simulates a real-world application where students can view, report, and manage their academic grades. This system addresses the issue of missing or unrecorded grades in a student's profile.</h1> 
      </div>
    </div>
  )
}

export default Background
