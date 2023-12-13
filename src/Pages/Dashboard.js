import React from 'react'
import "../Styling/Dashboard.css"
import comScience_logo from "../Images/comScience_logo.png"
import data from "../Data/Simulated";
import Mapper from '../Components/Mapper';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';




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
                  <p id='ntop'>
                    <p>Welcome 11335755</p>
                    <p></p>
                    <h3>Notifications</h3>
                  </p>
                    <Mapper style0={{padding:"30px"}} style={{borderRadius:'10px',color:'white' ,padding:'10px', backgroundColor:'#0000ff7e',marginBottom:'20px'}} data = {data.Notifications} />
              </div>
              <div className='m2'>
                   <div className='m21'>
                   <p id='ntop'>
                    <h3>Open Issues</h3>
                  </p>
                   <Mapper style0={{padding:"30px"}} style={{borderRadius:'10px',color:'white' ,padding:'10px', backgroundColor:'#0000ff7e',marginBottom:'20px'}} data = {data.Open} />
                   </div>
                   <div className='m22'>
                   <p id='ntop'>
                    <h3>Resolved Issues</h3>
                  </p>
                   <Mapper style0={{padding:"30px"}} style={{borderRadius:'10px' ,padding:'10px',color:'white', backgroundColor:'#148d12f3',marginBottom:'20px'}} data = {data.Solved} />
                   </div>
              </div>
              </div>
              <div className='middleSection1'>
                   <div className='middleSection10'>
                   <h3>Year 2 SEM1</h3>
                   <div  style={{flexDirection:"column",display:"flex",gap:"20px"}}>
          {data.Gradebook[1].map((message, index) => {
           
  
           return (
              <div  key={index}>
               {message}
              </div>
            );
          })}
      </div>
                   </div>
              </div>
        </div>
        <BottomNavbar />
       
         <Footer />

    </div>
  )
}

export default Dashboard