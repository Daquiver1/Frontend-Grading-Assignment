import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
  Router,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login ";
import Dashboard from "./Pages/Dashboard";
import Help from "./Pages/Help";
import Contact from "./Pages/Contact";
import Grades from "./Pages/Grades";
import Form from "./Pages/Form";

const Common = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Common />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grades",
        element: <Grades />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
