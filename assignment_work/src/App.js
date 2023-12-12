import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import Homepage from './Components/homepage/homepage';
import Form from './Components/missing_grade/form';
import Contact from './Components/contact_page/contact';
function App() {
  return (
    <Routes>
      <Route>
      <Route path="*" element={<Homepage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
