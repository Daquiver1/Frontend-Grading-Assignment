import React from 'react'
import BottomNavbar from '../Components/BottomNavbar'
import '../Styling/Landing.css'
import comScience_logo from '../Images/comScience_logo.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/footer'

function Homepage({id}) {
  return (
    <div className='Main'>
        <div className='topSection'>
              <img className='logo' height="50px" width="35px" src={comScience_logo}></img> 
          <div className='title'>
            <div className='title0'><text>Missing Grade Report System</text></div>
            <div className='title1'><text>Homepage</text></div>
          </div>
        </div>
        <div className='middleSectionh'>
            <div className='middleSectionh0'>
              <div className='m0texth'>
              <text>Welcome</text><br></br>

              <text>This is a Missing Grade Report System</text><br></br>
              <p></p>
              <text>This App will help you to:</text>
              <ul>
              <li>Report Missing Grades</li>
              <li>Contact Instructors</li>
              <li> View Grades</li>
              </ul>
              Use the bottom Navbar to  navigate the site.<br></br>
             
              <p id='dcs'>Brought to you by DCSUG</p>
              </div>
            </div>
            <div className='middleSection1h'>
              <div className='m1texth'>

              Responses to reports made are usually made within minutes <br></br>
              <p></p>

             <p>Use the Help and Support Page If you encounter any Issues
              </p> 
              <button className='loginButton'><Link id='Link' to="Login">Sign in</Link></button>
              </div>
            </div>
        </div>
           <Footer />
    </div>
  )
}

export default Homepage