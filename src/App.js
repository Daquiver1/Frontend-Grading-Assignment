import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import InstructorContactPage from './pages/ContactInstructor';
import Login from './pages/Login';
import GradesReport from './pages/GradeReport';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="app-main-container">
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/contactinstructor' Component={InstructorContactPage}/>
          <Route path='/login' Component={Login}/>
          <Route path='/grades' Component={GradesReport}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
