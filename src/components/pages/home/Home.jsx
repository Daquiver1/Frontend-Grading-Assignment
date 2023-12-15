import React from "react";
import "./Home.css"
import SideBar from "../../sidebar/SideBar";
import NavBar from "../../navbar/NavBar";
import Widget from "../../widget/Widget";

const Home =() => {
    return(
        <div className="home">
            <SideBar />
            <div className="homeContainer">
                <NavBar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    );
};

export default Home;