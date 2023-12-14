import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./routes/LandingPage.jsx"
import Login from "./routes/Login.jsx"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
