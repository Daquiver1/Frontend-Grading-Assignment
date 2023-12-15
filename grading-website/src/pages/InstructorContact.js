import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import "../components/InstructorContact.css";

function InstructorContact() {
  const backgroundImage = (
    <img src={process.env.PUBLIC_URL + "./images/dcs-banner.jpg"} />
  );
  const pageContent = (
    <>
      <div className="page-content-container">
        <div className="page-header-box">
          <h2>Meet Your Instructors</h2>
        </div>
        <div className="instructors-box">
          <div className="image-box">
            <img
              src={
                process.env.PUBLIC_URL + "./images/Dr Jamal Deen Abdulai.jpg"
              }
            />
          </div>
          <div className="instructor-details">
            <p>Name: Dr.Jamal Deen Abdulai</p>
            <p>Mobile :+233 208 603 777</p>
            <p>Email:jabdulai-deen@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={
                process.env.PUBLIC_URL +
                "./images/ELIZIER T AMEYAW-BURONYAH.jpg"
              }
            />
          </div>
          <div className="instructor-details">
            <p>Name :Dr. Elizier Taiba Ameyaw-Buronyah</p>
            <p>Mobile : +233 545 436 360</p>
            <p>Email: eameyaw-buronyah@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + "./images/famous_1103.jpg"} />
          </div>
          <div className="instructor-details">
            <p>Name :Prof.Famous Nanewortor</p>
            <p>Mobile : +233 244 436 781</p>
            <p>Email: fnanewortor@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + "./images/marian anowa.jpg"} />
          </div>
          <div className="instructor-details">
            <p>Name :Dr. Marian Annowa Nyako</p>
            <p>Mobile : +233 504 404 300</p>
            <p>Email: manyako@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={process.env.PUBLIC_URL + "./images/Mavis Osafo Adu 1.jpg"}
            />
          </div>
          <div className="instructor-details">
            <p>Name :Mrs. Mavis Osafo Adu</p>
            <p>Mobile : +233 244 436 333</p>
            <p>Email: mosafoadu@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={process.env.PUBLIC_URL + "./images/pam boateng - pad.jpeg"}
            />
          </div>
          <div className="instructor-details">
            <p>Name :Prof.Pamela Boateng</p>
            <p>Mobile : +233 208 000 123</p>
            <p>Email: paboateng@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={process.env.PUBLIC_URL + "./images/Pascaline S 111.jpg"}
            />
          </div>
          <div className="instructor-details">
            <p>Name :Dr. Pascaline Kuunzungla Songsore</p>
            <p>Mobile : +233 545 949 000</p>
            <p>Email: psongsore@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + "./images/Mr. Edison.jpg"} />
          </div>
          <div className="instructor-details">
            <p>Name : Prof.George Edison</p>
            <p>Mobile : +233 270 249 660</p>
            <p>Email: gedison@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + "./images/IMG_0533.jpg"} />
          </div>
          <div className="instructor-details">
            <p>Name :Prof.Selase Kodzo Dzidedi Agudetse</p>
            <p>Mobile : +233 277 603 969</p>
            <p>Email: skdagudetse@ug.edu.gh</p>
            <div className="submit1-button-container">
              <button type="button" className="btn btn-outline-success">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage={backgroundImage}
        pageContent={pageContent}
      />
      <Footer />
    </>
  );
}

export default InstructorContact;
