import React from "react";
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';


function InstructorContact() {

    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <h2>
                        Instructor Contact Page
                    </h2>

                    <Row>

        <Col md={6}>
          
          <h1>Instructors And Their Contacts</h1>

          <ListGroup>

         
            <ListGroup.Item> Dr Michael Agbo Tettey Soli Contact num: 0243455858 </ListGroup.Item>

            <ListGroup.Item> Dr Ebenezer Owusu Contact num: 0556722772 </ListGroup.Item>

            <ListGroup.Item> Dr Nana Assyne Contact num: 0240367484 </ListGroup.Item>

            <ListGroup.Item>Dr Jamal Deen Abdulai Contact num: 0243937744 </ListGroup.Item>


          </ListGroup>

        </Col>
        
      </Row>

                </div>

                <div className="form-group py-3">

                          
                <button type="button" className="btn btn-primary shadow w-100"  >Submit An Email to one of the Instructors</button>
            </div>    

            </div>
        </div>
    );

}



export default InstructorContact;