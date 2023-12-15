import React from 'react';
import Navbar from './Components/Navbar';
import "./App.css"
import LandingPage from './LandingPage';
import DashboardPage from './DashboardPage';

function App() {
  let component
  switch(window.location.pathname){
    case "/LandingPage":
      component = <LandingPage/>
      break
    case "/DashboardPage":
      component = <DashboardPage/>
      break
    case "/LoginPage":
      break
    case "/Gradereport":
      component = <GradereportPage/>
       break   
      default:
  }
 
   return(

  <>
    <Navbar />
    {component}
  </>
 )
}



export default App;
