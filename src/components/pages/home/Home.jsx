import React from "react";
import "./Home.css"
import SideBar from "../../sidebar/SideBar";
import NavBar from "../../navbar/NavBar";

const Home =() => {
    return(
        <div className="home">
            <SideBar />
            <div className="homeContainer">
                <NavBar />
                navbar container
            </div>
        </div>
    );
};

export default Home;