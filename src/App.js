import React from 'react'
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import Contacts from './pages/Contacts';
import Dashboards from './pages/Dashboard';
import Grades from './pages/Grades';
import Helps from './pages/Helps';
import Homes from './pages/Homes';
import MissingGrades from './pages/MissingGrades';
import LogIns from './pages/LogIns';

function App() {
  let component
  switch(window.location.pathname){
    case"/Homes":
      component=<Homes/>
      break
      case "/Helps":
        component=<Helps/>
        break
        case"/Dashboards":
        component=<Dashboards/>
         break
         case"/LogIns":
         component=<LogIns/>
            break
            case"/Grades":
            component=<Grades/>
              break
              case"/Contacts":
              component=<Contacts/>
                break
                case"/MissingGrades":
                component=<MissingGrades/>
                   break



  }
  return ( 
  <><Navbar/>
  {component}
  <Footer/>
    </>
  ) 
}

export default App





