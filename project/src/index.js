import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route , Switch, Link , Redirect  } from 'react-router-dom';
import Login from './Pages/Login';
import Support from './Pages/Support';
import Dashboard from './Pages/Dashboard';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
 {/*<React.StrictMode> */}
    
 {/*</React.StrictMode> */}
  </Route>
  <Route path='/Pages/Login' element={<Login />}>
    
  </Route>
  <Route path='/Pages/Support' element={<Support />}></Route>
  <Route path='/Pages/Dashboard' element={<Dashboard />}></Route>
 </Routes>
 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
