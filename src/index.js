import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './pages/Dashboard/Dashboard';
import Help from './pages/HelpPage/Help';
import ReportForm from './pages/ReportFolder/ReportForm';

import Instructor from './pages/Instructor Info/Instructor';
import Courselist from './pages/TranscriptFolder/Courselist';
import Login from './pages/LoginFolder/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  ,
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "help",
    element: <Help/>,
  },
  {
    path: "courselist",
    element: <Courselist/>,
  },
  {
    path: "instructorInfo",
    element: <Instructor/>,
  },
  {
    path: "reportForm",
    element: <ReportForm/>,
  },
  {
    path: "login",
    element: <Login/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


