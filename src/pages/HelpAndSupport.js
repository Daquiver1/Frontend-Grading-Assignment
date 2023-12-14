/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Card, CardBody, CardTitle, CardText } from "reactstrap";
import LandingHeader from "../layout/header/LandingHeader";
import LandingFooter from '../layout/footer/LandingFooter';
import { Button, CollapseElement } from "../components/Component";


const HelpAndSupport = () => {

    const [openCollapsibleId, setOpenCollapsibleId] = useState(null);

    const handleToggle = (id) => {
        setOpenCollapsibleId((prevId) => (prevId === id ? null : id));
      };

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

           <LandingHeader showLogin={true}/>


           <section class="event header" id="home">
                <div class="header3 bg">
                    <div class="event-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                    <div class="center-text">
                                        <div class="text-center w-100">
                                            
                                            <div class="wedding-time">
                                                <div class="row  col-sm-8 offset-sm-2">

                                                    <Card class="card-preview card-bordered">
                                                    
                                                        <br></br>
                                                        <h2>FAQ - FREQUENTLY ASKED QUESTIONS</h2>
                                                        <br></br><br></br>
                                                        <div class="card-inner card-inner-lg col-sm-8 offset-sm-2">
                                                            
                                                            <Form>
                                                                <CollapseElement className="btn-collapsible col-lg-12" 
                                                                id={1}
                                                                question={"Can I access the missing grade system without logging in?"} 
                                                                answer={"No! You will have to login first in order to use the missing grade system."}
                                                                onToggle={handleToggle}
                                                                />
                                                                <br></br>

                                                                <CollapseElement className="btn-collapsible col-lg-12" 
                                                                id={2}
                                                                question={"Is my data secure?"} 
                                                                answer={"Yes, we use advanced security measures to protect your personal and academic information."}
                                                                onToggle={handleToggle}
                                                                />
                                                                <br></br>

                                                                <CollapseElement className="btn-collapsible col-lg-12" 
                                                                id={3}
                                                                question={"How often are grades updated?"} 
                                                                answer={"Grades are updated weekly for real-time monitoring."}
                                                                onToggle={handleToggle}
                                                                />
                                                                <br></br>

                                                                <CollapseElement className="btn-collapsible col-lg-12" 
                                                                id={4}
                                                                question={"Can I access the missing grade system without logging in?"} 
                                                                answer={"No! You will have to login first in order to use the missing grade system."}
                                                                onToggle={handleToggle}
                                                                />
                                                                <br></br>

                                                                <CollapseElement className="btn-collapsible col-lg-12" 
                                                                id={5}
                                                                question={"Can I contact instructors on the platform?"} 
                                                                answer={" Yes, use the dedicated messaging feature to connect with your instructors."}
                                                                onToggle={handleToggle}
                                                                />
                                                                <br></br>                                                               

                                                            </Form>
                                                            
                                                        </div>
                                                    </Card>

                                                    <br></br>
                                                    
                                                    
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
                                                <div class="row col-sm-8 offset-sm-2">

                                                    <Card class="card-preview card-bordered">

                                                        <CardBody>
                                                            <CardTitle tag="h2">
                                                                Contact Us
                                                            </CardTitle>

                                                            <div class="card-inner card-inner-lg col-sm-8 offset-sm-2">
                                                            
                                                                <Form>

                                                                    <FormGroup>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputName1"> Name: </label>
                                                                            <input type="text" class="form-control" id="exampleName1" aria-describedby="nameHelp" placeholder="Enter name"/>
                                                                        </div>
                                                                    </FormGroup>    
                                                                    <br></br>

                                                                    <FormGroup>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1">Email :</label>
                                                                            <input type="email" class="form-control" id="exampleEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                                        </div>
                                                                    </FormGroup>
                                                                    <br></br>

                                                                    <FormGroup>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputPhoneNumber1">Phone Number : </label>
                                                                            <input type="text" class="form-control" id="exampleInputPhoneNumber" placeholder="Phone number"/>
                                                                        </div>
                                                                    </FormGroup>
                                                                    <br></br>

                                                                    <FormGroup>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputID1">ID :</label>
                                                                            <input type="number" class="form-control" id="exampleInputID" placeholder="Id"/>
                                                                        </div>
                                                                    </FormGroup>
                                                                    <br></br>

                                                                    <FormGroup>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputPassword1">Level : </label>
                                                                            <input type="number" class="form-control" id="exampleLevel" placeholder="Level"/>
                                                                        </div>
                                                                    </FormGroup>
                                                                    <br></br>

                                                                    <FormGroup>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputPassword1">Message :</label>
                                                                            <textarea type="textbox" class="form-control" id="exampleMessage" placeholder="message"/>
                                                                        </div>
                                                                    </FormGroup>
                                                                    
                                                                    <br></br>
                                                                    <FormGroup>
                                                                        <Button size="lg" className="btn-block col-lg-6 login-rounded" type="submit" color="primary">
                                                                            Submit
                                                                        </Button>
                                                                    </FormGroup>
                                                                    <br></br>

                                                                </Form>
                                                            
                                                            </div>

                                                        </CardBody>
                                                                                                            
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

export default HelpAndSupport;