
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import GradeReportPage from './gradereport';
import DashboardPage from './dashboard';
import LoginPage from './login';
import LandingPage from './landingpage';
import  './gradereportform';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Navigation/>
    <Routes>
    <Route path='/dashboard' element={<DashboardPage/>} ></Route>
    <Route path='/gradereport' element={<GradeReportPage/>} ></Route>
    <Route path='/login' element={<LoginPage/>} ></Route>
    <Route path='/landingpage' element={<LandingPage/>} ></Route>
    </Routes>
    </div>
    </BrowserRouter>


  );
}

export default App;
