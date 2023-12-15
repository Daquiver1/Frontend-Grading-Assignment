import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './component/Header'
import LandingPage from './component/LandingPage'
import GradeReportPage from './component/GradeReportPage'
import Login from './component/Login'
import DashboardPage from './component/DashboardPage';
import HelpSupport from './component/HelpSupport'
import MissingGradeReport from './component/MissingGradeReport'
import InstructorContact from './component/InstructorContact'


import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/LandingPage",
    element: <LandingPage />
  },
  {
    path: "GradeReport",
    element: <GradeReportPage />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Dashboard",
    element: <DashboardPage />
  },
  {
    path: "/HelpSupport",
    element: <HelpSupport />
  },
  {
    path: "/MissingGradeReport",
    element: <MissingGradeReport />
  },
  {
    path: "/InstrutorContact",
    element: <InstructorContact />
  },



]);


const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
); 
