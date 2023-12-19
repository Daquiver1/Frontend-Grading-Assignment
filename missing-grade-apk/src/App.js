import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <LandingPage/>
      <Footer/>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
