import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

export const Routers =() => {
  return(
    <Router>
      <Routes>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path='./pages/LoginPage'></Route>
      </Routes>
    </Router>
  )
}
export default Routers;