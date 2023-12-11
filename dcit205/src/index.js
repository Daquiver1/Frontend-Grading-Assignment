import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./components/Home";
import Login from "./components/loginform";
import Form from './components/Forms';

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
   
);


