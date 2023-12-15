import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MissingGrade from "./components/MissingGrade";
import Home from "./components/Home";

import Gradereport from "./components/Gradereport"
import HelpAndSupport from "./components/HelpAndSupport";
import InstuctorContact from "./components/InstuctorContact";




export const router =createBrowserRouter([

        {
            path:"/",
            element:<App/>,
        },
        {
            path:"/login",
            element:<Login/>,
        },
        {
          path:"/dashboard",
          element:<Dashboard/>,
        },
        {
            path:"/MissingGrade",
            element:<MissingGrade/>,
        },
        {
            path: "/Home",
            element: < Home />,
                   
        },
     
        {
            path:"/Gradereport",
            element: <Gradereport/>,
        },
        {
            path:"/HelpAndSupport",
            element: <HelpAndSupport/>
        },
        {
            path:"/InstuctorContact",
            element: <InstuctorContact/>
        }

    ])