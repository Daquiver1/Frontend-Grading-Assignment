import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Grade from './components/Docs/Grade';


function App() {
  
  return (
    <Routes>
      <Route>
        <Route path='*' element={<Home />} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/grade' element={<Grade/>}/>
      </Route>
    </Routes>
  ); 
}

export default App;
