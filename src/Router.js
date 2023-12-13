import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Grade from "./pages/Grade";
import Faqs from "./pages/Faqs";
import Instructorpage from "./pages/Instructorpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
       
    },
    {
        path: "/login",
        element: <Login />,
    },

    {
        path:"/dashboard",
        element: <Dashboard />,
    },

    {
        path:"/profile",
        element : <Profile />,
    },

    {
        path:"/dashboard",
        element : <Dashboard />,
    },
    {
        path:"/grade",
        element: <Grade />,
    },
    {
        path:"/profile",
        element:<Profile />,
    },

    {
        path:"/faqs",
        element:<Faqs />,    
    },

    {
        path:"/instructorpage",
        element: <Instructorpage />,
    },
 
])