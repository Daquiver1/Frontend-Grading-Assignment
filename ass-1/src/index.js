import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Contact from "./Component/pages/Contact Us";
import Help from "./Component/pages/Help";
import Login from "./Component/pages/Login";
import Dashboard from "./Component/pages/Dashboard";
import Register from "./Component/pages/Register";
import GradeReport from "./Component/pages/Grade Report";
import MissingGradeForm from "./Component/pages/Missing grade form";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Help",
    element: <Help />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "/GradeReport",
    element: <GradeReport />,
  },
  {
    path: "/MissingGradeForm",
    element: <MissingGradeForm />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
