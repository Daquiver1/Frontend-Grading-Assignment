import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages-And-Components/Home/Home';
import LoginForm from './Pages-And-Components/LoginForm/LoginForm';
import Dashboard from './Pages-And-Components/Dashboard/Dashboard';
import GradeReport from './Pages-And-Components/Grades-Report/GradesReport';
import MissingGradeForm from './Pages-And-Components/Missing-Grades-Form/MissingGradeForm';
import InstructorContact from './Pages-And-Components/Instructor-Contacts/InstructorContact';
import HelpandSupport from './Pages-And-Components/Help-And-Support/HelpandSupport';



function App  () {
     return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MissingGradeForm" element={<MissingGradeForm />} />
          <Route path="/GradeReport" element={<GradeReport />} />
          <Route path="/HelpandSupport" element={<HelpandSupport />} />
          <Route path="/InstructorContact" element={<InstructorContact />} />
        </Routes>
</BrowserRouter>
      </div>
     );
}

export default App;