import React from "react";
import Slider from "../components/Inc/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">WELCOME, STUDENT</h3>
              <div className="underline mx-auto"></div>
              <p>
                This is a platform where all students of the university of Ghana
                from all departments and schools can check grades in their
                respective courses. On this, students can report problems such
                as missing grades in some courses or incorrect grades listed for
                some courses. All you need to do is to log in with your student
                ID and pin to be able access grades and fill out forms to report
                any problem.
              </p>
              <Link to="/Login" className="btn btn-warning shadow">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">
                The University's vision and mission
              </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 text-center">
              <h6>The University's Vision</h6>
              <p>
                The vision of the University of Ghana is to become a World-Class
                research intensive University that will build up its students to
                become responsible citizens of society.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h6>The University's Mission</h6>
              <p>
                Our mission is to create an enabling environment that make the
                university increasingly relevant to national and global
                development through cutting-edge research as well as high
                quality teaching and learning.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h6>The University's Values</h6>
              <p>
                We at the university of Ghana uphold core Values such as
                integrity,loyalty,respect and commitment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
