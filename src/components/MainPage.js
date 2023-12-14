import React from "react";
import Hero from "./hero";
import Navbar from '../components/navbar';
import '../App.css';

const MainPage = () => {
  return (
    <React.Fragment>
        <section>
            <div className="wrapper">
              <Navbar />
                <Hero />
            </div>
        </section>
    </React.Fragment>
  );
};

export default MainPage;