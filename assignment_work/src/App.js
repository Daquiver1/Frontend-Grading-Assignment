import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import Homepage from './Components/homepage/homepage';
import Form from './Pages/help_page/missing_grade/form';
import Contact from './Components/contact_page/contact';
import Help from './Pages/help_page/help'
import Dashboard from './Components/dashboardpage/dashboard'
import Gradepoint from './Components/gradepage/gradepoint'
function App() {
  return (
    <Routes>
      <Route>
      <Route path="*" element={<Homepage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help" element={<Help />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gradepoint" element={<Gradepoint />} />
      </Route>
    </Routes>
  );
}

export default App;
