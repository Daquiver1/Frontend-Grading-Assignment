import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import Homepage from './Components/homepage';
function App() {
  return (
    <Routes>
      <Route>
      <Route path="*" element={<Homepage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
