import { Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Gradereport from "./pages/Gradereport";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Instructorcontact from "./pages/Instructorcontact";
import Login from "./pages/Login";
import Missinggradepage from "./pages/Missinggradepage";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={< Home />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/gradereport" element={< Gradereport />} />
        <Route path="/help" element={< Help />} />
        <Route path="/instructorcontact" element={< Instructorcontact />} />
        
        <Route path="/login" element={< Login />} />
        <Route path="/missinggradepage" element={< Missinggradepage />} />
      </Routes>

      <Footer />
    </div>
  )
}
export default App;