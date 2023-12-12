import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Alert from "./pages/alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Landing} />
          <Route path="Login" exact Component={Login} />
          <Route path="Dashboard" exact Component={Dashboard} />
          <Route path="alert" exact Component={Alert} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
