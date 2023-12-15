import { Outlet, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header';
import Login from './pages/Login';
import LandingPage from "./pages/LandingPage";
import Report from "./pages/Report";
import TranscriptDetail from "./pages/TranscriptDetail";
import FAQPage from "./pages/FAQPage";
import Dashboard from "./pages/Dashboard";
import ContactPage from "./pages/ContactPage";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="login" element={< Login />}/>;
          <Route path="LandingPage" element={< LandingPage />} />;
          <Route path="Report" element={< Report />}/>;
          <Route path="TranscriptDetail" element={< TranscriptDetail />} />;
          <Route path="FAQPage" element={< FAQPage />}/>;
          <Route path="Dashboard" element={< Dashboard />}/>
          <Route path="Login" element={< Login/>} />
          <Route path="ContactPage" element={< ContactPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;