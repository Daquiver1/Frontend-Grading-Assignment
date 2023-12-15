import React from 'react';
import Navbar from './Components/Navbar';
import "./App.css"
import LandingPage from './LandingPage';
import DashboardPage from './DashboardPage';

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <LandingPage/>
      break
    case "./DashboardPage":
      component = <DashboardPage/>
      break
      default:
  }
 console.log(window.location)
   return(
  
  <React.Fragment>
    <Navbar />
    {component}
  </React.Fragment>
 )
}

export default App;
