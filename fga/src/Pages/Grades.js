import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PageStyles/Grades.css";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";
import Grade from "../Components/Grade";
import "../Styles/ComponentStyles/Grade";

const Grades = () => {
    
    return (
        <>
            {/**Will display the grades as a table */}
            <Header />
            <SideNav />
            <Grade />
            {/*<p>
                Click 
                    <Link to="/Pages/MissingGradeReport">
                        HERE
                    </Link>
                to report your missing grade
            </p>*/}
            <Footer  />
        </>
    )
}

export default Grades;