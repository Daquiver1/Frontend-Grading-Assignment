import React from 'react'
import Header from './components/common/heading/Header';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css'
import Home from './home/Home';
import About from './components/about/About';
import LoginSignup from './components/login-signup/LoginSignup';

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path = '/' exact component = {Home}/> 
          <Route path = '/about' exact component = {About}/> 
          <Route path = '/login-signup' exact component = {LoginSignup}/> 
        </Switch>
      </Router>

    </>
  )
}


export default App;
