
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GradeReportPage from './gradereport';
import DashboardPage from './dashboard';
import LoginPage from './login';
import LandingPage from './landingpage';
import  MissingGradeForm from'./gradereportform';
import HelpAndSupportPage from'./help';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
    <Routes>
    <Route path='/dashboard' element={<DashboardPage/>} ></Route>
    <Route path='/gradereport' element={<GradeReportPage/>} ></Route>
    <Route path='/login' element={<LoginPage/>} ></Route>
    <Route path='/landingpage' element={<LandingPage/>} ></Route>
    <Route path='/gradereportform' element={<MissingGradeForm/>} ></Route>
    <Route path='/help' element={< HelpAndSupportPage/>} ></Route>
    </Routes>
    </div>
    </BrowserRouter>


  );
}

export default App;
