import React from 'react';
import BottomNavbar from '../Components/BottomNavbar';
import comScience_logo from '../Images/comScience_logo.png';
import {Link} from 'react-router-dom';
import Footer from '../Components/footer';
import "../Styling/generalStyles.css"
import "../Styling/homepage.css"

function Homepage({id}) {
  return (
    <div className="hMain">
      <div className="topSection">
        <img
          className="logo"
          height="50px"
          width="35px"
          src={comScience_logo}
        />
        <div className="title">
          <div className="title0"><text>Missing Grade Report System</text></div>
          <div className="title1"><text>Homepage</text></div>
        </div>
        <button className="loginButton">
              <Link id="link0" to="Login">Sign in</Link>
        </button>
      </div>
      <div className="middleSectionh">
        <div className="middleSectionh0">
          <div className="m0texth">
            <text>Welcome</text><br />

            <text>This is a Missing Grade Report System</text><br />
            <p />
            <text>This App will help you to:</text>
            <ul>
              <li>Report Missing Grades</li>
              <li>Contact Instructors</li>
              <li> View Grades</li>
            </ul>
            Use the bottom Navbar to  navigate the site.<br />

            <p id="dcs">Brought to you by DCSUG</p>
          </div>
        </div>
        <div className="middleSection1h">
          <div className="m1texth">
            Responses to reports made are usually made <br />
             within minutes.
            <p />
            <p>
              Use the Help and Support Page If you encounter <br />
               any Issues
            </p>
            <p>
              This website constains:
              <ul>
                <li> Grade report page</li>
                <li> Instructor contact page</li>
                <li> Dashboard</li>
                <li> Help and Support Page</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <p style={{color:'white'}}>University of Ghana@2023</p>
    </div>
  );
}

export default Homepage;
