import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import GradeReportpage from './Pages/GradeReportpage';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Contact'
import Help from './Pages/Help'
import Missinggradeform from './Pages/Missinggradeform';
import Signuplogin from './Pages/Signuplogin';

import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Grade' element={<GradeReportpage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Mgrade' element={<Missinggradeform/>}/>
        <Route path='/login' element={<Signuplogin/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
