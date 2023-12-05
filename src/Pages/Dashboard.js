import React from 'react'
import "../Styling/Dashboard.css"
import comScience_logo from "../Images/comScience_logo.png"

function Dashboard() {
  return (
    <div className='Main'>
        <div className='topSection'>
              <img className='logo' height="50px" width="35px" src={comScience_logo}></img> 
          <div className='title'>
            <div className='title0'><text>Missing Grade Report System</text></div>
            <div className='title1'><text>Dashboard</text></div>
          </div>
        </div>
        <div style={{backgroundColor:'white'}} className='middleSection'>
              <div className='middleSection0'>
              <div className='m1'>

              </div>
              <div className='m2'>
                   <div className='m21'>

                   </div>
                   <div className='m22'>

                   </div>
              </div>
              </div>
              <div className='middleSection1'>
      
              </div>
        </div>
        <div className='bottom'>
           <text>University of Ghana @2023</text>
        </div>
    </div>
  )
}

export default Dashboard