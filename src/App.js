import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/home';
import Dashboard from './pages/dashboard/index.';
import NotFound from './pages/404';
import Login from './pages/login';
import GradeReportPage from './pages/GradeReportPage';
import MissingGradeForm from './pages/MissingGradePage';
import InstructorContactPage from './pages/InstructorContactPage';
import HelpAndSupportPage from './pages/HelpAndSupportPage';




function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/dashboard/missing-grade-form" element={<MissingGradeForm />}/>
            <Route path="/dashboard/grade-report" element={<GradeReportPage />}/>
            <Route path="/dashboard/instructor-contact" element={<InstructorContactPage />}/>
            <Route path="/dashboard/help and support" element={<HelpAndSupportPage />}/>
            
         </Routes>
      </>
      

   )
}

export default App;