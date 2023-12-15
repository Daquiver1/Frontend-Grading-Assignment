import React from 'react'
import Header from './components/common/heading/Header';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import './App.css'
import Home from './home/Home';

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path = '/' exact component = {Home}/> 
        </Switch>
      </Router>
    </>
  )
}


export default App;
