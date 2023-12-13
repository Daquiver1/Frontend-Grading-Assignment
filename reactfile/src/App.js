
import './App.css';
import LandingPage from './LandingPage';


import './LandingPage.css'
import {Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import MissingGrade from './MissingGrade';
import Help from './Help';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element= {<LandingPage/>} />
      <Route path= '/Login' element= {<LoginPage/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/MissingGrade' element={<MissingGrade/>} />
      <Route path='/Help' element={<Help/>}/>
     
      

     </Routes>

  

    
    </div>
  );
}

export default App;
