import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Form from "../../Pages/Form";
import Report from "../../Pages/Report/index.";
import Instructor from "../../Pages/Instructor";
import Support from "../../Pages/Support";
import Hero from "../hero";
import LoginForm from "../loginform";
import MainPage from "../MainPage";

function AppRoutes(){
    return (
        <Routes>
            <Route path='/login' element={<LoginForm/>}></Route>
            <Route path='/hero' element={<Hero/>}></Route>
            <Route path='/dashboard/main' element={<Dashboard/>}></Route>
            <Route path='/dashboard/grade-report' element={<Report/>}></Route>
            <Route path='/dashboard/missing-grade-form' element={<Form/>}></Route>
            <Route path='/dashboard/instructor-contact' element={<Instructor/>}></Route>
            <Route path='/dashboard/help-and-support' element={<Support/>}></Route>
        </Routes>
    )
}

export default AppRoutes;