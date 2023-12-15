import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Grade from './Pages/Grade';
import Help from './Pages/Help';
import Report from './Pages/Report';
import LecturerContact from './Pages/Contact';

function App() {
  return (
   
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/grade' element={<Grade/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/contact' element={<LecturerContact/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
