// Import Switch from react-router-dom for v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GradeReportPage from './pages/GradeReportPage';
import MissingGradeFormPage from './pages/MissingGradeFormPage';
import InstructorContactPage from './pages/InstructorContactPage';
import HelpAndSupportPage from './pages/HelpAndSupportPage';

// Your component code
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;