import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
//import Forms from './Components/Forms';
import Login from './Components/Login';



function App() {
  return (
    <Router> 
    <div>

    <Login/>
    </div>
    </Router>
  );
}

export default App;