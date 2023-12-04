import "./App.css";
import Home from "./pages/Home";
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
import Posters from "./pages/Posters";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import Poster from "./pages/Home1";
import About from "./pages/About"
import GradeReport from "./pages/GradeReport";
import InstructorContact from "./pages/InstructorContact";
import MissingGrade from "./pages/MissingGrade";
import Help from "./pages/Help";



const DashBoard = () => {
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
    element: <DashBoard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posters",
        element: <Posters />,
      },
      {
        path: "/gradeReport",
        element: <GradeReport />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/instructorContact",
        element: <InstructorContact />,
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
