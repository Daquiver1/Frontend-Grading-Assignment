import React from 'react';
import Landing from './components/pages/Landing_page';
import Dashboard from './components/pages/Dashboard_page';
import Login from './components/pages/Login_page';
import Navbar from './components/inc/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>

    <div>

    <Navbar/>
      <Routes>
    
      <Route  path= "/Landing">
      <Landing/>
      </Route>

      <Route path= "/Dashboard">
      <Dashboard />
      </Route>

      <Route path= "/Login">
      <Login />
      </Route>

      </Routes>

      

     
      
      
      
    </div>
    </Router>
    
    

  );
}

export default App;
