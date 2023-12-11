
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Footer from './Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
        
            
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
