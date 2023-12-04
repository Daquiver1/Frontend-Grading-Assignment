import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import GradeReport from './Pages/GradeReport';
import HelpandSupport from './Pages/HelpandSupport';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Login />,
    errorElement:<text>Oops there was an error!</text>,
    children: [
      {
        path:"Landing",
        element:<Landing />,
        children: [
          {
             path:"Dashboard",
             element:<Dashboard />
          },
          {
             path:"GradeReport",
             element:<GradeReport />
          },
          {
             path:"Help",
             element:<HelpandSupport />
          },
        ]
      },
    ]
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

