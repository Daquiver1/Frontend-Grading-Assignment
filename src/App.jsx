import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layout/dashboard";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import AddGrade from "./pages/AddGrade";
import Contacts from "./pages/contacts";
import Faq from "./pages/FAQ";
import RequireAuth from "./auth/requireAuth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reported-grades" element={<Reports />} />
            <Route path="add-missing-grade" element={<AddGrade />} />
            <Route path="contact-instructor" element={<Contacts />} />
            <Route path="need-help" element={<Faq />} />
          </Route>
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
