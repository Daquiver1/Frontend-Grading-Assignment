import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Js/LoginPage';
import DashboardPage from './Js/DashboardPage';
import SideNavBar from './Js/SideNavBar';
import HomePage from './Js/HomePage';
import GradeReportPage from './Js/GradeReportPage';
import HelpAndSupportPage from './Js/HelpAndSupportPage';
import InstructorContactPage from './Js/InstructorContactPage';
import ContactPage from './Js/ContactPage';
import MissingGradeFormPage from './Js/MissingGradeFormPage';


const router =createBrowserRouter([
  {
    path:'/',
    element:<LoginPage/>,
  },
  {
    path:'/home',
    element:<HomePage/>,
  },
  {
    path:'/dashboard',
    element:<DashboardPage/>,
  },
  {
    path:'/sidenavbar',
    element:<SideNavBar/>,
  },
{
  path:'/grade-report',
  element:<GradeReportPage/>,
},
{
  path:'/missing-grade-form',
  element:<MissingGradeFormPage/>,
},
{
  path:'/instructor-Contact',
  element:<InstructorContactPage/>,
},
{
  path:'/help-and-support',
  element:<HelpAndSupportPage/>,
},
{
  path:'/contact',
  element:<ContactPage/>,
}
])




function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
