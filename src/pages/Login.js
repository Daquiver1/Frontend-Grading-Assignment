/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";
import { Form, FormGroup, Card } from "reactstrap";
import { Button } from "../components/Component"
import LandingHeader from "../layout/header/LandingHeader";
import LandingFooter from '../layout/footer/LandingFooter';


const Login = () => {

    const onFormSubmit = (formData) => {
        console.log(formData);
        //backend authentication will be here: to check if email and password are correct 
        window.history.pushState("", "", "/admin/dashboard");
        window.location.reload();
    };

    const { errors, register, handleSubmit } = useForm();
    
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
                                                        
                                                        <Form onSubmit={handleSubmit(onFormSubmit)}>

                                                            <FormGroup>
                                                                <div class="form-group">
                                                                    <label for="studentId">Student ID</label>
                                                                    <input 
                                                                        type="number" 
                                                                        class="form-control" 
                                                                        name="studentId" 
                                                                        aria-describedby="emailHelp" 
                                                                        placeholder="Enter student Id"
                                                                        ref={register({ required: "This field is required" })}
                                                                    />
                                                                    {errors.studentId && <span className="invalid">{errors.studentId.message}</span>}
                                                                </div>
                                                            </FormGroup>    
                                                            <br></br>

                                                            <FormGroup>
                                                            <div class="form-group">
                                                                <label for="pin">PIN</label>
                                                                <input 
                                                                    type="password" 
                                                                    class="form-control" 
                                                                    name="pin" 
                                                                    placeholder="PIN"
                                                                    ref={register({ required: "This field is required" })}
                                                                />
                                                                {errors.pin && <span className="invalid">{errors.pin.message}</span>}
                                                            </div>
                                                            </FormGroup>
                                                            
                                                            <br></br>
                                                            <FormGroup>
                                                                <Button size="lg" className="btn-block col-lg-6 login-rounded" type="submit" color="primary">
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