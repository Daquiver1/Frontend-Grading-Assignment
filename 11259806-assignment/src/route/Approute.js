import { Routes, Route } from "react-router-dom";
import React from 'react'
import StDashBoard from "../pages/StDashBoard";
import Courses from "../pages/Courses";

import Contact from "../pages/Contact";
import MissingGradeForm from "../pages/MissingGradeForm";
import Landingpage from "../pages/LandingPage";
import LoginPage from "../pages/Login";
import Layout from "../pages/Layout";
import Help from "../pages/Help";
import Faq from "../components/Faq";
import ContactSupport from "../components/TechnicalSuppot";


const Approute = () => {
  return (
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

      <Route path="/home" element={<Layout/>}>

        <Route index element={<StDashBoard/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="missinggradeform" element={<MissingGradeForm/>}/>
        <Route path="help" element={<Help/>}>
          <Route index element={<Faq/>}/>
          <Route path="technicalsupport" element={<ContactSupport/>}/>
        </Route>
      </Route> 

    </Routes>
  )
}

export default Approute
