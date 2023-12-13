import React from "react";
 import Header from "./components/components-pages/Header";
// import LandingPage from "./components/components-pages/LandingPage";
import Login from "./components/components-pages/Login";
 import Feature from "./components/components-pages/Feature";
 import Presentation from "./components/components-pages/Presentation";
 //import InstructorContactPage from "./components/components-pages/InstructorContactPage";
//  import Footer from "./components/components-pages/Footer";
import GradeReport from "./components/components-pages/GradeReport";
import CourseDetail from "./components/components-pages/CourseDetail";
import Filter from "./components/components-pages/Filter";
import HelpAndSupportPage from "./components/components-pages/HelpAndSupportPage"
import MissingGradeForm from "./components/components-pages/MissingGradeForm"

function App() {
  return (
    
    <div className="App">
{/* <LandingPage/>   */}
  {/* <Login/>   */}
  <Header/>
 <Feature/>
 <Presentation/> 
 {/* <InstructorContactPage/> */}
  {/* <Footer/>  */}
   {/* <GradeReport/>  */}
    {/* <CourseDetail/>  */}
   {/* <Filter/>   */}
   {/* <HelpAndSupportPage/> */}
   {/* <MissingGradeForm/> */}
 

    </div>
  );
}

export default App;
