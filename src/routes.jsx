import {
  Login,
  Dashboard,
  GradeReport,
  Home,
  Instructors,
  Support,
  MissingGradeReport,
} from "./pages/index";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "instructors",
    path: "/instructors",
    element: <Instructors />,
  },
  {
    name: "support",
    path: "/support",
    element: <Support />,
  },
  {
    name: "login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    name: "gradereport",
    path: "/gradereport",
    element: <GradeReport />,
  },
  {
    name: "missinggradereport",
    path: "/missinggradereport",
    element: <MissingGradeReport />,
  },
];
