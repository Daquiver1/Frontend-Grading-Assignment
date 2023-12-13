import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Components/Header";
import textbook from "../img/textbook.jpeg";
import education from "../img/education.jpeg";
import graduation from "../img/graduation.jpeg";
import exams from "../img/exams.jpg";
import teacher from "../img/teacher.jpeg";
import succ from "../img/succ.jpg";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={textbook}
                className="d-block w-100 carousel-child"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={graduation}
                className="d-block w-100 carousel-child"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={education}
                className="d-block w-100 carousel-child"
                alt="Slide 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div>
          <p className="text-center pt-5 fw-bold fs-1 text-info mt-5 mb-5" id="about">
            EXAMINATION PRACTICE
          </p>
        </div>

        <div className="row m-auto">
          <div className="col">
            <div className="card" style={{ width: "20rem" }}>
              <img src={exams} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Examination Mal-practice</h5>
                <p className="card-text">
                  Examination malpractice is an act which is not accepted in the
                  period of examination.
                </p>
                <a href="#" className="btn btn-outline-primary shadow">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col me-5">
            <div className="card" style={{ width: "20rem" }}>
              <img src={teacher} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Experienced Tutors</h5>
                <p className="card-text">
                  We have quality and experienced tutors that will help to make
                  your dream come true.
                </p>
                <a href="#" className="btn btn-outline-primary shadow">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "20rem" }}>
              <img src={succ} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Success Ahead</h5>
                <p className="card-text">
                  Be motivated, focus, and develop the spirit of hard work to
                  become successful.
                </p>
                <a href="#" className="btn btn-outline-primary shadow">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
}

export default Home;
