//import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import GradeReport from '../pages/GradeReport';
import MissingGrade from '../pages/MissingGrade';
import InstructorContact from '../components/InstructorContact/InstructorContact';
import Dashboard from '../pages/Dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';
import HelpAndSupport from '../pages/HelpAndSupport';
import DetailedGradeReport from '../pages/DetailedGradeReport';


const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/missingGrade" element={<MissingGrade/>}/>
            <Route path="/gradeReport" element={<GradeReport/>}/>
            <Route path="/instructorContact" element={<InstructorContact/>}/>
            <Route path="/helpAndSupport" element={<HelpAndSupport/>}/>
            <Route path="/detailedReport" element={<DetailedGradeReport/>}/>



        </Routes>
    );
};

export default Routers;