import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SignIn from '../components/SignIn.jsx';
import MainContent from '../components/MainContent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
},
{
  path:"/SignIn",
  element: <SignIn />,
},
{
  path:"/MainContent",
  element: <MainContent />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
