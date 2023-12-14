import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./routes/LandingPage.jsx"
import Login from "./routes/Login.jsx"
import Dashboard from "./routes/Dashboard.jsx"
import GradeReport from "./routes/GradeReport.jsx"
import GradeForm from "./routes/GradeForm.jsx"
import InstructorPage from "./routes/InstructorPage.jsx"
import HelpSupport from "./routes/HelpSupport.jsx"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/grade-form" element={<GradeForm />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/help" element={<HelpSupport />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
