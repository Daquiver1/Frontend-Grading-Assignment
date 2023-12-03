import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/homepage';


function App(){
    return(
        <BrowserRouter>
        <div className="App">
           <Navbar />
           <Routes>
          <Route path="/" Component={Home} /> 
          </Routes>
        </div>
          </BrowserRouter>
    );
}

export default App;