import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SetNavSwitch } from "./features/nav/navSwitchSlice";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import GradeReport from "./pages/GradeReport";
import HelpAndSupport from "./pages/HelpAndSupport";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn/LogIn";
import MissingGradeForm from "./pages/MissingGradeForm";
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
   if(window.location.pathname==="/dashboard"){
      dispatch(SetNavSwitch(1))
  }
  else if(window.location.pathname==="/gradereport"){
    dispatch(SetNavSwitch(2))
}
else if(window.location.pathname==="/missinggradeform"){
  dispatch(SetNavSwitch(3))
}
else if(window.location.pathname==="/contact"){
  dispatch(SetNavSwitch(4))
}
else if(window.location.pathname==="/helpandsupport"){
  dispatch(SetNavSwitch(5))
}
else if(window.location.pathname==="/login"){
  dispatch(SetNavSwitch(6))
}
else{
  dispatch(SetNavSwitch(0))
}
}, [dispatch])

  return (
    <div >
       <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/gradereport" element={<GradeReport/>}/>
          <Route path="/missinggradeform" element={<MissingGradeForm/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/helpandsupport" element={<HelpAndSupport/>}/>
        <Route path="/login" element={<LogIn/>}/>
         {/*  <Route path="/services" element={<Services/>}/>
         <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
