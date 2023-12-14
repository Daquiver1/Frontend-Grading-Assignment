import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

export const Routers =() => {
  return(
    <Router>
      <Routes>
        <Route path="./pages/LandingPage" exact>
          <LandingPage />
        </Route>

      </Routes>
    </Router>
  )
}
export default Route;