import React from 'react';


import Header from "../component/header.js";
import Navbar from '../component/navbar.js';


const Home = () => {
    return (
        <div >
            <div className=" justify-center items-center text-center">
                <Navbar />
                <Header />
           
            </div>
        </div>
    )
}

export default Home