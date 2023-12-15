<<<<<<< HEAD
import LandingPage from './blogs/Landingpage';
//import Home from './Home';
import Navbar from './navbar';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './blogs/LoginPage';
import Dashbaoard from './blogs/dasboard';
import GradeReport from './blogs/GradeReport';
import MissingGradeform from './blogs/MissingGrade form';
import InstructorContact from './blogs/InstructorContact';
import Help from './blogs/Help';
=======
import LandingPage from './pages/Landingpage';
//import Home from './Home';
import Navbar from './navbar';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/LoginPage';
import Dashbaoard from './pages/dasboard';
import GradeReport from './pages/GradeReport';
import MissingGradeform from './pages/MissingGrade form';
import InstructorContact from './pages/InstructorContact';
import Help from './pages/Help';
>>>>>>> 4e8ad53f373be61b886e23f729f1bb0538be56c6
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
