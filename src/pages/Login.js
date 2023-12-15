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
            
           <LandingHeader/>

            {/* <!-- header Start--> */}
            <section className="event header" id="home">
                <div className="header3 bg">
                    <div className="event-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                    <div className="center-text">
                                        <div className="text-center w-100">
                                            <div className="h1-margin">
                                                <h1>Missing Grade Report System
                                                </h1>
                                            </div>
                                            <div className="wedding-time">
                                                <div className="row  col-sm-8 offset-sm-2">

                                                <Card className="card-preview card-bordered">
                                                
                                                    <br></br>
                                                    <h2>Sign-In</h2>
                                                    <br></br><br></br>
                                                    <div className="card-inner card-inner-lg col-sm-8 offset-sm-2">
                                                        
                                                        <Form onSubmit={handleSubmit(onFormSubmit)}>

                                                            <FormGroup>
                                                                <div className="form-group">
                                                                    <label htmlFor="studentId">Student ID</label>
                                                                    <input 
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        id="studentId" 
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
                                                            <div className="form-group">
                                                                <label htmlFor="pin">PIN</label>
                                                                <input 
                                                                    type="password" 
                                                                    className="form-control" 
                                                                    id="pin" 
                                                                    name="pin" 
                                                                    placeholder="PIN"
                                                                    ref={register({ required: "This field is required" })}
                                                                />
                                                                {errors.pin && <span className="invalid">{errors.pin.message}</span>}
                                                            </div>
                                                            </FormGroup>
                                                            
                                                            <br></br>
                                                            <FormGroup>
                                                                <Button size="lg" className="col-lg-6" type="submit" color="primary">
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