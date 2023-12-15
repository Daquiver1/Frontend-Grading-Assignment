 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import GradeReport from './GradeReport';
import MissingGrade from './MissingGradeForm';
import InstructorContact from './InstructorContact';
import HelpAndSupport from './HelpandSupport';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/grade report",
    element: <GradeReport/>
  },
  {
    path: "/missing grade",
    element: <MissingGrade/>
  },
  {
    path: "/instructor contact",
    element: <InstructorContact/>
  },
  {
    path: "/help and support",
    element: <HelpAndSupport/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
