import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GradeReport from './pages/GradeReport';
import MissingGradeForm from './pages/MissingGradeForm';
import InstructorContact from './pages/InstructorContact';
import HelpAndSupport from './pages/HelpAndSupport';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />
  },
  {
    path: "/GradeReport",
    element: <GradeReport />
  },
  {
    path: "/MissingGradeForm",
    element: <MissingGradeForm />
  },
  {
    path: "/InstructorContact",
    element: <InstructorContact />
  },
  {
    path: "/HelpAndSupport",
    element: <HelpAndSupport />
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
