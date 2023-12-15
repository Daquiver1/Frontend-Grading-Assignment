
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Dashboard from "./routes/Dashboard"
import GradeReport from "./routes/GradeReport"
import MissingGradeForm from "./routes/MissingGradeForm"
import Instructors from "./routes/Instructors"
import Help from "./routes/Help"
function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/missing-grade-form" element={<MissingGradeForm />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/help" element={<Help />} />
          
        </Routes>
    </BrowserRouter>
  )
}

export default App
