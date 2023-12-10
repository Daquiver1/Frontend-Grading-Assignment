import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Gradereport from './Gradereport';
import Helpandsupport from './HelpabdSupport';
import Home from './Home';
import InstructedContact from './InstructedContact';
import Login from './Login';
import Missinggrade from './Missinggrade';
import { Link } from 'react-router-dom' 
import './App.css'

function App() {
  return (
    <div className='navigation'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/Grade report' element={<Gradereport/>} />
        <Route path='/Help and Support' element={<Helpandsupport/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Instructed Contact' element={<InstructedContact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Missing grade' element={<Missinggrade/>} />
      </Routes>  
        <header>
            <nav className='navigation'>
                <Link className='dash' to='/Home'>Home</Link>
            
                <Link className='dash' to='/dashboard'>Dashboard</Link>
              
                <Link className='dash' to='/Gradereport'>Grade report</Link>

                <Link className='dash' to='/Missinggrade'>Missing Grade</Link>

                <Link className='dash' to='/InstructedContact'>Instructed Contact</Link>

                <Link className='dash' to='/HelpandSupport'>Help and Support</Link>

                <Link className='dash' to='/Login'>Login</Link>
              </nav>
        </header>
    </div>
  );
}

export default App;
