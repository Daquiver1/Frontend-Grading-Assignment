import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';


const HelpContacts = () => {
 return (
    <Container>

      <Row>

        <Col md={6}>
          <h1>Help</h1>

          <ListGroup>

            <ListGroup.Item>Report any problem</ListGroup.Item>

            <ListGroup.Item>Contacts below</ListGroup.Item>

            <ListGroup.Item>Contact Form below</ListGroup.Item>

          </ListGroup>

        </Col>
        
      </Row>
      <div>

        <section className="py-4 bg-info">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 my-auto">

                        <h4>Contact us</h4>

                    </div>

                    <div className="col-md-8 my-auto">

                        <h6 className="float-end">

                            Home / Contact us 

                        </h6>

                    </div>

                </div>

            </div>
        </section>

        <section className="section">

          <div className="container">

            <div className="card-shadow">

              <div className="card-body">

                <div className="row">

                  <div className="col-md-6">
                       <h6>
                        
                        Contact Form
                        </h6>  
                        <hr />

                        <div className="form-group">
                          <label className="mb-1">Student Full name</label>

                          <input type="text" class="form-control" placeholder="Enter full name" />
                          </div>   

                          <div className="form-group">
                          <label className="mb-1">Phone Number</label>

                          <input type="text" class="form-control" placeholder="Enter Phone Number" />
                          </div>   

                          <div className="form-group">
                          <label className="mb-1">Student Email</label>

                          <input type="text" class="form-control" placeholder="Enter Student Email" />
                          </div>  

                          <div className="form-group">
                          <label className="mb-1">Problem</label>

                          
                          <textarea rows="3" className="form-control" placeholder="Type the problem you are facing" ></textarea>
                          </div>    

                          <div className="form-group py-3">

                          
                          <button type="button"  className="btn btn-primary shadow w-95" placeholder="Type the problem you are facing" >Submit Form</button>
                          </div>    
                  </div>

                  <div className="col-md-16">

                    <h5 className="main-heading">Contact Information</h5>

                    <div className="underline">

                    </div>
                    <p>
                      University of Ghana, Legon Campus
                    </p>

                    <p>
                      Phone: 020 518 6904/ 020 680 4077/ 03039655240
                    </p>

                    <p>
                      Address: University of Ghana 
                        P.O BOX LG 25, Legon
                        Accra, Ghana 
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


        </section>

      </div>
    </Container>

    

    
 );
};

export default HelpContacts;