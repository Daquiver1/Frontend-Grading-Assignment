import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/LandingPage"; // Assuming you have a Home component
import Login from "./pages/Login"; // Assuming you have a Login component
import Dashboard from "./pages/Dashboard"; // Assuming you have a Dashboard component
import GradeReport from "./pages/GradeReport"; // Assuming you have a GradeReport component
import MissingGradeForm from "./pages/MissingGradeForm"; // Assuming you have a MissingGradeForm component
import InstructorContact from "./pages/InstructorContact"; // Assuming you have an InstructorContact component
import HelpAndSupport from "./pages/HelpAndSupport"; // Assuming you have a HelpAndSupport component
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/grade-report" element={<GradeReport />} />
        <Route path="/missing-grade-form" element={<MissingGradeForm />} />
        <Route path="/instructor-contact" element={<InstructorContact />} />
        <Route path="/help-and-support" element={<HelpAndSupport />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
