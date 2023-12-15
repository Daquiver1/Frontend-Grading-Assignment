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
          <Form.Label className="labels">Course Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Title of Course"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className="labels">Course Code</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Course Code"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label className="labels">Instructor Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Course was delivered by?"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid" className="feedback">
              Please enter the name of the instructor
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label className="labels">Expected Grade</Form.Label>
          <Form.Control type="text" placeholder="based on results from Marked Scripts/Assesments" required />
          <Form.Control.Feedback type="invalid" className="feedback">
            Cannot be empty
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="validationCustom04">
          <Form.Label className="labels">Explanation Field</Form.Label>
          <Form.Control type="text" placeholder="Message for the instructor" required />
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