import React from "react";
import Gabby from "../img/Gabby.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-brand d-flex ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              xmlSpace="preserve"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#fff"
                d="M63.976 32.934c-.131 2.826-2.453 5.078-5.309 5.066a5.325 5.325 0 0 1-1.596-.25c-.012-.005-.021-.002-.034-.007A35.887 35.887 0 0 0 46 36c-1.074 0-2.131.07-3.181.165a1.02 1.02 0 0 0-.76 1.336c.012.033-.018.031-.034.041a95.6 95.6 0 0 1 4.155 18.111c.002.005.012 0 .014.007.029.15.176.277.315.245a28.098 28.098 0 0 0 11.094-12.698l.054.022A2 2 0 0 1 61.5 44c0 .296-.07.577-.184.829-2.703 6.167-7.302 11.307-13.047 14.71a4.131 4.131 0 0 1-1.334.427 4.2 4.2 0 0 1-4.698-3.641c-.009-.065-.056-.144-.079-.216a92.362 92.362 0 0 0-3.836-16.927c-.005-.075-.007-.149-.041-.247a5.244 5.244 0 0 1-.267-1.289c-.204-2.65 1.642-4.96 4.196-5.438A38.558 38.558 0 0 1 46 32c4.283 0 8.407.679 12.276 1.928.128.043.262.072.406.072.646.002 1.158-.471 1.272-1.084.012-.305.046-.605.046-.916 0-4.71-1.186-9.137-3.241-13.03l.026-.015a1.958 1.958 0 0 1-.254-.955 1.993 1.993 0 0 1 3.776-.901c.003 0 .005-.003.008-.005A31.85 31.85 0 0 1 64 32c0 .312-.015.623-.024.934zM52.567 15.016a55.87 55.87 0 0 1-12.329 8.4c-.105.072-.207.147-.361.223a3.342 3.342 0 0 0-1.719 3.976c0 .003-.003.005-.006.008 1.295 4.54-1.119 9.258-5.439 10.926-.007.003-.002.021-.007.026A36.106 36.106 0 0 0 16.461 51.46a3.4 3.4 0 0 0 .744 4.265 27.823 27.823 0 0 0 12.958 4.199l-.002.031a1.993 1.993 0 0 1 1.84 1.983 2 2 0 0 1-2.415 1.956c-5.321-.397-10.264-2.116-14.541-4.8-3.14-2.276-3.937-6.57-1.905-9.831 4.473-6.448 10.775-11.52 18.174-14.445a.924.924 0 0 1 .102-.061 4.96 4.96 0 0 0 2.86-6.063c-.032-.102-.046-.185-.065-.274A7.493 7.493 0 0 1 38 20.071a51.766 51.766 0 0 0 11.707-7.84 1.596 1.596 0 0 0-.148-1.969C44.754 6.368 38.666 4 32 4c-2.732 0-5.36.424-7.854 1.159a.496.496 0 0 0-.039.65c.007.01-.012.005-.017.005a96.747 96.747 0 0 1 9.353 13.064 6.484 6.484 0 0 1-1.064 6.821c.014.024.021.054.039.078.116.191-.02.239-.301.201a6.287 6.287 0 0 1-1.275 1.035 6.665 6.665 0 0 1-.902.443A64.12 64.12 0 0 1 12 30c-.962 0-1.91-.031-2.858-.059-4.08-.271-7.253-3.716-7.139-7.84a7.67 7.67 0 0 1 .596-2.744c2.185-5.069 5.651-9.444 9.976-12.759A2 2 0 0 1 16 8a1.99 1.99 0 0 1-.805 1.596l.026.033a28.085 28.085 0 0 0-9.03 11.583A3.618 3.618 0 0 0 6 22.288a3.643 3.643 0 0 0 3.477 3.666c.835.022 1.672.046 2.523.046 5.777 0 11.326-.805 16.517-2.278.102-.047.208-.075.308-.139a2.467 2.467 0 0 0 1.062-2.814 92.83 92.83 0 0 0-8.756-12.211c-.024-.056-.042-.109-.085-.162a4.491 4.491 0 0 1-.87-1.642c-.665-2.311.621-4.7 2.868-5.467A31.936 31.936 0 0 1 32 0a31.86 31.86 0 0 1 20.012 7.037c2.279 1.938 2.657 5.334.801 7.712-.077.097-.166.175-.246.267zM3.993 33.935l.102.003a27.818 27.818 0 0 0 4.23 12.926c-.012.01-.026.017-.036.026A2 2 0 0 1 6.625 50a1.998 1.998 0 0 1-1.886-1.355C2.225 44.532.587 39.826.153 34.762a1.997 1.997 0 1 1 3.84-.827zM38 60a2 2 0 1 1 .001 3.999A2 2 0 0 1 38 60z"
              />
            </svg>
            <p className="ms-3 fs-5 fw-4 text-white">
              Student Grading <br />
              Report System
            </p>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item pe-5 fw-5 fs-5">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item pe-5 fw-5 fs-5">
                <a className="nav-link" href="#">
                  Enquiries
                </a>
              </li>
              <li className="nav-item pe-5 fw-5 fs-5">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <a
              className="rounded-circle"
              type="submit"
              data-bs-target="#alert"
              data-bs-toggle="modal"
            >
              <span className="badge bg-success rounded-pill position-absolute ms-4">
                3
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="white"
                className="bi bi-bell me-4 shadow rounded-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </a>
            <img
              className="avatar"
              src={Gabby}
              width="50px"
              height="50px"
              style={{ borderRadius: "100%", marginRight: "10px" }}
              alt="User Avatar"
            />
            <form className="d-flex">
              <a
                href=""
                className="btn btn-outline-success me-5 shadow"
                data-bs-toggle="modal"
                data-bs-target="#modal"
                type="submit"
              >
                LOG-OUT
              </a>
            </form>
          </div>
        </div>
      </nav>

      <div className="modal" tabIndex="-1" id="alert">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-info text-white fs-3">
              <h5 className="modal-title">Notification</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Some of your courses have not been graded!!!</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a href="" type="button" className="btn btn-outline-success">
                OK
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" tabIndex="-1" id="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-info">
              <h5 className="modal-title">Confirmation</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to Log-Out?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a
                href="login.html"
                type="button"
                className="btn btn-outline-success"
              >
                Log-Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
