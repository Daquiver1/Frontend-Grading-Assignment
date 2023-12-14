import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Missing from "./pages/missingGrade";
import Help from "./pages/helpSupport";

import instructorContact from "./pages/instructorContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Landing} />
          <Route path="login" exact Component={Login} />
          <Route path="dashboard" exact Component={Dashboard} />

          <Route path="instructorContact" exact Component={instructorContact} />
          <Route path="missingGrade" exact Component={Missing} />
          <Route path="helpSupport" exact Component={Help} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
