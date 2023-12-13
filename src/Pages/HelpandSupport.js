import React from 'react'
import '../Styling/Help.css'
import comScience_logo from "../Images/comScience_logo.png"
import data from "../Data/Simulated";
import BottomNavbar from '../Components/BottomNavbar';

function HelpandSupport() {
  return (
    <div className='Mainn'>
    <div className='topSection'>
          <img className='logo' height="50px" width="35px" src={comScience_logo}></img> 
      <div className='title'>
        <div className='title0'><text>Missing Grade Report System</text></div>
        <div className='title1'><text>Help and Support</text></div>
      </div>
    </div>
      
         <div>
            <BottomNavbar />
            </div>
    <div className='bottom'>
       <text>University of Ghana @2023</text>
    </div>
</div>
  )
}

export default HelpandSupport