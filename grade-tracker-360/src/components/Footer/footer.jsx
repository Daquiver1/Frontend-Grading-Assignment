import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <div className='Footer'>
        <p>&copy;{new Date().getFullYear()} Grade Tracker App - All Rights Reserved</p>
    </div>
  )
}
