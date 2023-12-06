import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Landing} />
          <Route path="Login" exact Component={Login} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
