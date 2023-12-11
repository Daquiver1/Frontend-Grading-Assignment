import React from 'react';
import Login from './components/Login';
import LandingPage from './components/landing_page';

// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
 );
};

export default App;