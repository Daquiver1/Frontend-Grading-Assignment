import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/home';
import Dashboard from './pages/dashboard/index.';
import NotFound from './pages/404';
import Login from './pages/login';
import Grades from './pages/grade_report';


function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Grades" element={<Grades />} />
         </Routes>
      </>

   )
}

export default App;