import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

function AppLogin() {
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
            <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-targeting-a-good-grades-in-high-school-exams-school-shadow-tal-revivo.png" alt="external-targeting-a-good-grades-in-high-school-exams-school-shadow-tal-revivo"/>
              <h3 className="mt-1 mb-5 pb-1">Your Path to Academic Success</h3>
            </div>
            <p>Please login to your account</p>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <Link to="#!" className="text-muted">Forgot password?</Link>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to="/create" className="mx-2">
                <MDBBtn outline color='danger'>
                  create
                </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AppLogin;