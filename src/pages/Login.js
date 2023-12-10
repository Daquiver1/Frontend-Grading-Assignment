/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Form, FormGroup, Card } from "reactstrap";
import { Button } from "../components/Component"
import LandingHeader from "../layout/header/LandingHeader";
import LandingFooter from '../layout/footer/LandingFooter';


function Login(){
    return (
        <Fragment>
            
            <div className="loader-wrapper">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

           <LandingHeader/>


            {/* <!-- header Start--> */}
            <section class="event header" id="home">
                <div class="header3 bg">
                    <div class="event-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                    <div class="center-text">
                                        <div class="text-center w-100">
                                            <div class="h1-margin">
                                                <h1>Missing Grade Report System
                                                </h1>
                                            </div>
                                            <div class="wedding-time">
                                                <div class="row  col-sm-8 offset-sm-2">

                                                <Card class="card-preview card-bordered">
                                                
                                                    <br></br>
                                                    <h2>Sign-In</h2>
                                                    <br></br><br></br>
                                                    <div class="card-inner card-inner-lg col-sm-8 offset-sm-2">
                                                        
                                                        <Form>

                                                            <FormGroup>
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">Email address</label>
                                                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                                </div>
                                                            </FormGroup>    
                                                            <br></br>

                                                            <FormGroup>
                                                            <div class="form-group">
                                                                <label for="exampleInputPassword1">Password</label>
                                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                                            </div>
                                                            </FormGroup>
                                                            
                                                            <br></br>
                                                            <FormGroup>
                                                                <Button size="lg" className="btn-block col-lg-6 login-rounded" type="submit" color="primary">
                                                                    {/* {loading ? <Spinner size="sm" color="light" /> : "Sign in"} */}
                                                                    Sign In
                                                                </Button>
                                                            </FormGroup>

                                                            <br></br><br></br>
                                                        </Form>
                                                        
                                                    </div>
                                                </Card>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* <!-- header end--> */}


          <LandingFooter/>


        </Fragment>
    );
}

export default Login;