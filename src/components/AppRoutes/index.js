import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Form from "../../Pages/Form";
import Report from "../../Pages/Report/index.";
import Instructor from "../../Pages/Instructor";
import Support from "../../Pages/Support";

function AppRoutes(){
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/grade-report' element={<Report/>}></Route>
            <Route path='/missing-grade-form' element={<Form/>}></Route>
            <Route path='/instructor-contact' element={<Instructor/>}></Route>
            <Route path='/help-and-support' element={<Support/>}></Route>
        </Routes>
    )
}

export default AppRoutes;