import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import StDashBoard from "./pages/StDashBoard"
import Courses from "./pages/Courses"
import Help from "./pages/Help"
import Contact from "./pages/Contact"
import ContactSupport from "./components/TechnicalSuppot"
import Faq from "./components/Faq"
import Profile from "./pages/Profile"
import LoginPage from "./pages/Login"
import Landingpage from "./pages/Landingpage"
import MissingGradeForm from "./pages/MissingGradeForm"

function App() {
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landingpage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
       path: "/0",
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
          path: "reportgrade",
          element: <MissingGradeForm />
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