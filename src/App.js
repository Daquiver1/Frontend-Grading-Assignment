import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';


function App() {
  
  return (
    <Routes>
      <Route>
        <Route path='*' element={<Home />} /> 
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  ); 
}

export default App;
