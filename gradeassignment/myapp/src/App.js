import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Navbar from './Navbar';


function App() {
 return(
  <>
  <Navbar />
  <Router>
    <div className='app'>
      <Routes>
      <Route path='/' exact>
        <LandingPage />
        </Route>
      </Routes>
    </div>
  </Router>
  </>
 )
}

export default App;
