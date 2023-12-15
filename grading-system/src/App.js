import "./index.css";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/Pages/Footer";
import Missing from "./components/Pages/Missing";
import Dashboard from "./components/Pages/Dashboard";
import Grade from "./components/Pages/Grade";
import Instructor from "./components/Pages/Instructor";
import Help from "./components/Pages/Help";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/missing" element={<Missing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grade" element={<Grade />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
