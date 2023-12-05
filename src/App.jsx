import {  Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import Login from "./pages/login.js";
import Contact from "./pages/contact.js";
import './App.css';

function App() {
  return (
    <div>
      <div className="w-screen h-screen overflow-hidden">
        <Navbar/>

        <Routes>
          <Route path="/navbar" element = {<Navbar></Navbar>}></Route>
          <Route path="/contact" element = {<Contact></Contact>}></Route>
            <Route path="/login"element={<Login></Login>}></Route>
            <Route path="/contact"element={<Contact></Contact>}></Route>
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
