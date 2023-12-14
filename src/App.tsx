import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import GradeReportPage from "./components/GradeReportPage";
import MissingGradeForm from "./components/MissingGradeForm";
import InstructorContactPage from "./components/InstructorContactPage";
import HelpSupportPage from "./components/HelpSupportPage";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
