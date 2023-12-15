
import LandingPage from './pages/Landingpage';
//import Home from './Home';
import Navbar from './navbar';
//import Home from './Home';

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/LoginPage';
import Dashbaoard from './pages/dasboard';
import GradeReport from './pages/GradeReport';
import MissingGradeform from './pages/MissingGrade form';
import InstructorContact from './pages/InstructorContact';
import Help from './pages/Help'
import './index.css';




 


function App() {

  const pageStyle = {
    //backgroundColor:'#2ecc71', 
    minHeight: '100vh', 
  

   } ;
  return(
  <Router> 
    <div className='App' style={pageStyle}>
      <Navbar/>
    
      
         <div className='content'>
        <Switch>
          <Route exact path='/'><LandingPage/></Route>
            
          <Route path='/La'> <LoginPage/></Route >
          
           <Route path='/Db'> <Dashbaoard/></Route>
<Route path='/Gd'><GradeReport/></Route>
<Route path='/MGF'><MissingGradeform/></Route>
<Route path='/IC'><InstructorContact/></Route>
<Route path='/HP'><Help/></Route>
        </Switch>
      
      
         </div>
         
        
        
</div>
    </Router>
    
  )
}

export default App;
