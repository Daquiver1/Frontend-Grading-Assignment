import React from "react";
import Header from "./components/components-pages/Header";
// import LandingPage from "./components/components-pages/LandingPage";
// import Login from "./components/components-pages/Login";
import Feature from "./components/components-pages/Feature";
import Presentation from "./components/components-pages/Presentation";
import InstructorContact from "./components/components-pages/InstructorContact";
import Footer from "./components/components-pages/Footer";
function App() {
  return (
    
    <div className="App">
{/* <LandingPage/>   */}
 {/* <Login/>  */}
 <Header/>
 <Feature/>
 <Presentation/>
 <InstructorContact/>
 <Footer/>
 

    </div>
  );
}

export default App;
