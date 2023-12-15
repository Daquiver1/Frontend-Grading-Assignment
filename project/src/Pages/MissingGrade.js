import React, {useState} from "react";
import DashNav from './DashNav';
import SideBar from './SideBar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './MissingGrade.css';





function MissingGrade(){

        const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };

  
    
    return(
        <>
        <div className='container-fluid bg-secondary min-vh-100 sidebarContainer'>
                <div className='row'>
                    <div className='col-2 bg-white vh-100'>
         <SideBar />
         </div>
         <div className='col-10'>
       <div className='px-3 overview'>
       <DashNav />
       <div className="formContainer"> 
            <p className="paragraph1">Fill the form to Track your Mising Grade</p>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className="labels">Student ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ID"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className="labels">Year of Enrollment</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="eg: 2022/2023"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label className="labels">Course Code</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Enter Course code"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid" className="feedback">
              Please enter Course Code.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label className="labels">Course Title</Form.Label>
          <Form.Control type="text" placeholder="Title of Course" required />
          <Form.Control.Feedback type="invalid" className="feedback">
            Cannot be empty
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="validationCustom04">
          <Form.Label className="labels">Leave a note for the Instructor</Form.Label>
          <Form.Control type="text" placeholder="Message for the Instructor" required />
          <Form.Control.Feedback type="invalid" className="feedback">
            Please say something about your Issue.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
        </div>

       </div>
       </div>
       </div>

                
        </>
    )
}

export default MissingGrade;