import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LandingPage from './Pages/landingPage';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </Router>
  );
}

export default App;
