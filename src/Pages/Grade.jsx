import React from "react";
import NavBar from "../Components/Header2";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const GradeReport = () => {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <Sidebar />
        </div>


      </div>

      <Footer/>
    </>
  );
};

export default GradeReport;
