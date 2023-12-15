import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import DashboardPage from './Components/DashboardPage';
import GradeReportPage from './Components/GradeReportPage';
import MissingGradeFormPage from './Components/MissingGradeFormPage';
import InstructorContactPage from './Components/InstructorContactPage';
import HelpSupportPage from './Components/HelpAndSupportPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "dashboard",
    element: <DashboardPage/>,
  },
  {
    path: "grade-report",
    element: <GradeReportPage/>,
  },
  {
    path: "missing-grade-form",
    element: <MissingGradeFormPage/>,
  },
  {
    path: "instructor-contact",
    element: <InstructorContactPage/>,
  },
  {
    path: "help-support",
    element: <HelpSupportPage/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
