import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./components/Home";
import Login from "./components/loginform";
import Form from './components/Forms';
import Contact from './components/Contact';
import Help from './components/Help';
import GradeReportPage from './components/GradeReportPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Home.js",
    element: <Home/>
  },
  {
    path: "/loginform.js",
    element: <Login />
  },
  {
    path: "/Forms.js",
    element: <Form />
  },
  {
    path: "/Contact.js",
    element: <Contact />
  },
  {
    path: "/Help.js",
    element: <Help />
  },
  {
    path: "/GradeReportPage.js",
    element: <GradeReportPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
   
);


