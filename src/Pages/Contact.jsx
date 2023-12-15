import React from 'react'
import NavBar from '../Components/Header2'
import Sidebar from '../Components/Sidebar';
import Aziz from '../img/Aziz.jpg'
import Eyram from '../img/Eyram.jpg'
import Mark from '../img/Mark.jpg'
import Soli from '../img/Soli.jpg'
import Footer from '../Components/Footer';


const InstructorContact = () => {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <Sidebar />
        </div>
        <div className="col-md-12 col-lg-8">
          <div className="container">
            <h2 className="text-center fw-bolder text-info fs-1 mt-4 mb-4">
              Instructor's Details
            </h2>
            <div className="row mb-3">
              <div className="card mx-2 mb-3" style={{ width: "17rem" }}>
                <img src={Soli} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Micheal Agbo Tettey Soli</h5>
                  <p className="card-text">
                    Lecturer, Computer Science Department
                  </p>
                  <a href="#" className="btn btn-outline-info">
                    Email Lecturer <span className="bi bi-arrow-right"></span>
                  </a>
                </div>
              </div>
              <div className="card mx-2 mb-3" style={{ width: "17rem" }}>
                <img src={Mark} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mark Atta Mensah</h5>
                  <p className="card-text">
                    Lecturer, Computer Science Department
                  </p>
                  <a href="#" className="btn btn-outline-info">
                    Email Lecturer<span className="bi bi-arrow-right"></span>
                  </a>
                </div>
              </div>
              <div className="card mx-2 mb-3" style={{ width: "17rem" }}>
                <img src={Aziz} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Aziz Dwumfuor Abdullai</h5>
                  <p className="card-text">
                    Lecturer, Computer Science Department
                  </p>
                  <a href="#" className="btn btn-outline-info">
                    Email Lecturer <span className="bi bi-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card mx-2 mb-3" style={{ width: "17rem" }}>
                <img src={Eyram} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">E.K.A. Schwinger</h5>
                  <p className="card-text">Lecturer, Mathematics Department</p>
                  <a href="#" className="btn btn-outline-info">
                    Email Lecturer <span className="bi bi-arrow-right"></span>
                  </a>
                </div>
              </div>
              <div className="card mx-2 mb-3" style={{ width: "17rem" }}>
                <img src={Mark} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mark Atta Mensah</h5>
                  <p className="card-text">
                    Lecturer, Computer Science Department
                  </p>
                  <a href="#" className="btn btn-outline-info">
                    Email Lecturer <span className="bi bi-arrow-right"></span>
                  </a>
                </div>
              </div>
              <div className="card mx-2 mb-3" style={{ width: "17rem" }}>
                <img src={Aziz} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Aziz Dwumfuor Abdullai</h5>
                  <p className="card-text">
                    Lecturer, Computer Science Department
                  </p>
                  <a href="#" className="btn btn-outline-info">
                    Email Lecturer <span className="bi bi-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default InstructorContact