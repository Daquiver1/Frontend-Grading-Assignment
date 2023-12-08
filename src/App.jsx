import "./App.css";
import Home from "./pages/Home1";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import Poster from "./pages/Home1";
import Instructor from "./pages/Instructor"
import GradeReport from "./pages/GradeReport";
import DashBoard from "./pages/DashBoard";
import MissingGrade from "./pages/MissingGrade";
import Help from "./pages/Help";



const NavBox = () => {
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
    element: <NavBox />,
    children: [
      {
        path: "/home1",
        element: <Home />,
      },
      {
        path: "/gradeReport",
        element: <GradeReport />,
      },
      {
        path: "/instructor",
        element: <Instructor />,
      },
      {
        path: "/dashBoard",
        element: <DashBoard />,
      },
      {
        path: "/missingGrade",
        element: <MissingGrade />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/poster/:id",
    element: <Poster />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
