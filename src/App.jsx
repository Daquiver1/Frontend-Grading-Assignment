import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layout/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<DashboardLayout />}></Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
