
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import MissingGradeForm from './pages/MissingGradeForm';
import GradeReport from './pages/GradeReport';
import InstructorContact from './pages/InstructorContact';
import Login from './pages/Login';
import HelpAndSupport from './pages/HelpAndSupport';
import End from './components/End/End';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Dashborad' element={<Dashboard/>}/>
        <Route path='/MissingGradeForm' element={<MissingGradeForm/>}/>
        <Route path='/GradeReport' element={<GradeReport/>}/>
        <Route path='/InstructorContact' element={<InstructorContact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/HelpAndSupport' element={<HelpAndSupport/>}/>
      
      </Routes>
      <End/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
