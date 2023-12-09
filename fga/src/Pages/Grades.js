import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PageStyles/Grades.css";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";

const Grades = () => {
    
    return (
        <>
            {/**Will display the grades as a list */}
            <Header />
            <SideNav />
            <p>
                Click 
                    <Link to="/Pages/Grades">
                        HERE
                    </Link>
                to report your missing grade
            </p>
            <Footer  />
        </>
    )
}

export default Grades;