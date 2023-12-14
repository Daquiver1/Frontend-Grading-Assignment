import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/home';
import Dashboard from './pages/dashboard/index.';
import NotFound from './pages/404';
import Login from './pages/login';
import GradeReportPage from './pages/GradeReportPage';



function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/GradeReportPage" element={<GradeReportPage />}/>
            
         </Routes>
      </>

   )
}

export default App;