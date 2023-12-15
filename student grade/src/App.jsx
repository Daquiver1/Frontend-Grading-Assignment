import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import GradeReport from "./pages/GradeReport"
import Grades from "./pages/Grades1"
import Help from "./pages/Help"
import Home from "./pages/Home"
import Instructor from "./pages/Instructor"
import LoginPage from "./pages/LoginPage"
import MissingGrade from "./pages/MissingGrade"

function App() {
  return(
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/instructor" element={<Instructor/>}/>
        <Route path="/grade-report" element={<GradeReport/>}/>
        <Route path="/missing-grade" element={<MissingGrade/>}/>
        

      </Routes>
    </Router>
  )
}

export default App