import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
        
        
      <Footer />
      </div>
    </Router>
  );
}

export default App;
