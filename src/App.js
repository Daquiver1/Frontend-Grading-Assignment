import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import ContactPage from './ContactPage';
import GradeReport from './GradeReport';
import Header from './Header';
import HelpAndSupportPage from './HelpAndSupportPage';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import MissingGradeForm from './MissingGradeForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='Dashboard' element={< Dashboard/>} />
      <Route path='ContactPage' element={< ContactPage/>} />
      <Route path='GradeReport' element={< GradeReport/>} />
      <Route path='HelpAndSupportPage' element={< HelpAndSupportPage/>} />
      <Route path='LandingPage' element={< LandingPage/>} />
      <Route path='MissingGradeForm' element={<MissingGradeForm/>} />
      <Route path='/' element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;