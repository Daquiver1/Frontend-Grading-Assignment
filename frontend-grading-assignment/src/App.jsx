import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Help from "./routes/Help";
import ReportMissingGrade from "./routes/ReportMissingGrade";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <Home />}/>
        <Route path="login"  element={ <Login />}/>
        <Route path="help"  element={ <Help />}/>
        <Route path="report-missing-grade"  element={ <ReportMissingGrade />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
