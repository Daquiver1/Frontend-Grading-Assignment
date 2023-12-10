import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage';
import LoginPage from './components/loginpage';
import './App.css'; // Link your global CSS file
function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/LandingPage" exact component={LandingPage} />
    //     <Route path="/loginPage" exact component={loginPage}/>
    //     {/* Add routes for other pages */}
    //   </Switch>
    // </Router>
    <BrowserRouter>
      <LandingPage />
      <LoginPage/>
    </BrowserRouter>
  );
}

export default App;