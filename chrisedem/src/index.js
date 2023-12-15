import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import GradeReport from "./Grade report";
import GradeReportForm from "./Missing Grade form";
import Instructor from "./Instructor";
import HelpAndSupport from "./Help and Support";
import InstructorPage from "./Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/gradereport",
    element: <GradeReport />,
  },
  {
    path: "/gradereportform",
    element: <GradeReportForm />,
  },
  {
    path: "/InstructorPage",
    element: <InstructorPage />,
  },
  {
    path: "/Help and Support",
    element: <HelpAndSupport />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
