import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import dashboard from './components/pages/dashboard';
import gradereport from './components/pages/gradereport';
import instructorcontact from './components/pages/instructorcontact';
import helpsupport from './components/pages/helpsupport';
import login from './components/pages/login';


function App (){
  return(
   <>
   <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/dashboard' Component={dashboard}/>
        <Route path='/gradereport' Component={gradereport}/>
        <Route path='/instructorcontact' Component={instructorcontact}/>
        <Route path='/helpsupport' Component={helpsupport}/>
        <Route path='/login' Component={login}/>
      </Routes>
      </Router>
   </>
  );
}

export default App;
