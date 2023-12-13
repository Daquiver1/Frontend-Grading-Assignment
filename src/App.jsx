import { createBrowserRouter,RouterProvider,Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import StDashBoard from "./pages/StDashBoard"
import Courses from "./pages/Courses"
import Help from "./pages/Help"
import Contact from "./pages/Contact"
import ContactSupport from "./components/TechnicalSuppot"
import Faq from "./components/Faq"
import Profile from "./pages/Profile"

function App() {
const router = createBrowserRouter(
  [
    {
       path: "/",
       element: <Layout />,
       children: [
         {
          index: true,
          element: <StDashBoard />
         },
         {
          path: "courses",
          element: <Courses />
         },
         {
          path: "help",
          element: <Help />,
          children:[
            {
               index: true,
               element: <Faq />
            },
            {
               path: "technicalsupport",
               element: <ContactSupport />
            },
          ]
         },
         {
          path: "contact",
          element: <Contact />
         },
         {
          path: "profile",
          element: <Profile />
         }
       ]
    }
  ]
)


  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
