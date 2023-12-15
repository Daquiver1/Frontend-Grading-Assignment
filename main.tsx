import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
import "./form.css";

import DashBoard from "./pages/DashBoard.tsx";
import GradesReport from "./pages/GradesReport.tsx";
import ReportMissingGrade from "./pages/ReportMissingGrade.tsx";
import Instructors from "./pages/Instructors.tsx";
import HelpAndSupport from "./pages/HelpAndSupport.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  /*  {
    path: "/",
    element: <App />,
  }, */
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "gradesreport",
    element: <GradesReport />,
  },
  {
    path: "reportmissinggrade",
    element: <ReportMissingGrade />,
  },
  {
    path: "instructors",
    element: <Instructors />,
  },
  {
    path: "helpandsupport",
    element: <HelpAndSupport />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
