
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import FacultyPage from './Components/FacultyPage';
import AboutPage from './Components/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Programs",
    element: <ProgramsPage/>,
  },
  {
    path: "Faculty",
    element: <FacultyPage/>,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },

]);
