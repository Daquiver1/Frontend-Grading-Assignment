import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { Grader } from "./Pages/Grader";
import { Missinggradeform } from "./Pages/Missinggradeform";
import {Helps, } from "./Pages/Helps";
import {Instructor, } from "./Pages/Instructor";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grader" element={<Grader />} />
            <Route path="/missinggradeform" element={<Missinggradeform />} />
            <Route path="/helps" element={<Helps />} />
            <Route path="/instructor" element={<Instructor />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;
