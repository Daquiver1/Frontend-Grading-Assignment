import React from 'react'
import BottomNavbar from '../Components/BottomNavbar'
import "../Styling/Landing.css"

function Landing() {


  return (
    <div className='Main'>
   Missing Grade Report System
    <div className='Section1'>
      <h4>Welcome User</h4>
      <div className='mainInfo'>
      <div><h3>Notifications:</h3>
         <div className='Messages1'>

         </div>
      </div>
      <div>
        <h3>Solved Issues</h3>
        <div className='Issue1'>

        </div>
      </div>
      </div>
    </div>

    <div className='Section'>
    
      <div className='Issue2'>
      <h3>Pending Issues</h3>
         
      </div>
      <div id=''>

      </div>
      
    </div>
    <BottomNavbar />
    
    
    
    
    </div>
  )
}

export default Landing