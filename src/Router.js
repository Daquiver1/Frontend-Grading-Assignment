import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Reportform from "./Pages/Reportform"
import Dashboard from "./Pages/Dashboard";





export const router = createBrowserRouter ([

      {
        path:"/",
        element:<App/>,
      } , 
      {
        path:"/Home",
        element:<Home/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Reportform",
        element:<Reportform/>
      },
      {
        path:"/Dashboard",
        element:<Dashboard/>
      },
      
      






    ])