import React from "react";
import "../Styles/PageStyles/Grades.css";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";

const Grades = () => {
    handleCLick = () => {

    }
    
    return (
        <>
            {/**Will display the grades as a list */}
            <Header />
            <SideNav />
            <p>
                Click 
                    <a onCLick={handleCLick}>
                        HERE
                    </a>
                to report your missing grade
            </p>
            <Footer  />
        </>
    )
}