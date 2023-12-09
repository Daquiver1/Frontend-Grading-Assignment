
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";  
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer /> 
      <Login />
      
    </div>
  );
}

export default App;
