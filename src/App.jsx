import { createBrowserRouter,RouterProvider,Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import StDashBoard from "./pages/StDashBoard"
import GradeReport from "./pages/GradeReport"
import Help from "./pages/Help"
import Contact from "./pages/Contact"
import ContactSupport from "./components/TechnicalSuppot"
import Faq from "./components/Faq"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
function App() {
const router = createBrowserRouter(
  [
    {   
       path: "/",
       element: <Layout />,
       children: [
         {
          index: true,
          element: <Home />
         },
         {
          path: "/StDashBoard",
          element: <StDashBoard />
         },
         {
          path: "GradeReport",
          element: <GradeReport />
         },
         {
          path: "/SignIn",
          element: <SignIn/>
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
         },
        
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


/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import StDashBoard from './pages/StDashBoard';
import Courses from './pages/Courses';
import Help from './pages/Help';
import Contact from './pages/Contact';
import ContactSupport from './components/TechnicalSuppot';
import Faq from './components/Faq';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StDashBoard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="help" element={<Help />}>
            <Route index element={<Faq />} />
            <Route path="technicalsupport" element={<ContactSupport />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;*/