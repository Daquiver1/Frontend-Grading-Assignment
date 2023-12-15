import React from "react";
import slider1 from "../Images/slider 1.webp";
import slider2 from "../Images/slider 2.webp";
import slider3 from "../Images/slider 3.webp";
function Slider() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={slider1} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>The Premier University of Ghana</h5>
            <p>Check your current grades in your courses</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Log in </h5>
            <p>Log in with your student ID and pin</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider3} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Having any problems?</h5>
            <p>Report any problem you may be facing</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
