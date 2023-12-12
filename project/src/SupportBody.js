import React from "react";
import './SupportBody.css';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


const SupportBody = () =>{
    return(
        <>
            <div className="page-banner">
                <div className="banner-text">
                    How Can We Help?
                </div>
            </div>
            <p className="help-desk"> Help Desk</p>
            <div className="cards-container">
                            <ReactBootStrap.Card style={{ width: '18rem', marginRight: '20px' }}>
                            <i className='bi bi-rocket icon'></i>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Getting Started</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={{ width: '18rem', marginRight: '20px' }}>
                    <i className='bi bi-lock-fill icon'></i>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Reset Password</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>


                                    <ReactBootStrap.Card style={{ width: '18rem', marginRight: '20px' }}>
                                    <i className='bi bi-chat-square icon'></i>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title> Describe Issue</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
            </div>

            <div className="accordion-container">
                <div className="accord-holder">
            <ReactBootStrap.Accordion flush>
      <ReactBootStrap.Accordion.Item eventKey="0">
        <ReactBootStrap.Accordion.Header>What is the purpose of the school grade reporting system?</ReactBootStrap.Accordion.Header>
        <ReactBootStrap.Accordion.Body>
        The system is designed to provide a transparent and efficient way for students, parents, and educators to access and understand academic performance data.
        </ReactBootStrap.Accordion.Body>
      </ReactBootStrap.Accordion.Item>
      <ReactBootStrap.Accordion.Item eventKey="1">
        <ReactBootStrap.Accordion.Header>Who has access to the grade reporting system?</ReactBootStrap.Accordion.Header>
        <ReactBootStrap.Accordion.Body>
        Students and teachers will have access to the system. Each user type will have different levels of access based on their role.
        </ReactBootStrap.Accordion.Body>
      </ReactBootStrap.Accordion.Item>
      <ReactBootStrap.Accordion.Item eventKey="2">
        <ReactBootStrap.Accordion.Header>How do I create an account in the grade reporting system?</ReactBootStrap.Accordion.Header>
        <ReactBootStrap.Accordion.Body>
          Accounts are automatically created fro new students once their admissions are approved. A student will need his or her ID and Pin provided by the Administration on the admission letters.
        </ReactBootStrap.Accordion.Body>
      </ReactBootStrap.Accordion.Item>
      <ReactBootStrap.Accordion.Item eventKey="3">
        <ReactBootStrap.Accordion.Header>Is there a way to communicate with teachers through the system?

</ReactBootStrap.Accordion.Header>
        <ReactBootStrap.Accordion.Body>
          The grade reporting system includes Course instructor support feature that that students use to get the contact details of the course instructors for the respective courses.
        </ReactBootStrap.Accordion.Body>
      </ReactBootStrap.Accordion.Item>
      <ReactBootStrap.Accordion.Item eventKey="4">
        <ReactBootStrap.Accordion.Header>What should I do if I notice an error in the grade report?

</ReactBootStrap.Accordion.Header>
        <ReactBootStrap.Accordion.Body>
        Users can contact the teacher or school administration to address any discrepancies or errors in the grade report.
        </ReactBootStrap.Accordion.Body>
      </ReactBootStrap.Accordion.Item>
      <ReactBootStrap.Accordion.Item eventKey="5">
        <ReactBootStrap.Accordion.Header>I am having technical issues with the system. How can I get help?

</ReactBootStrap.Accordion.Header>
        <ReactBootStrap.Accordion.Body>
        Users can reach out to the school's IT support or the system administrator for technical assistance.
        </ReactBootStrap.Accordion.Body>
      </ReactBootStrap.Accordion.Item>
    </ReactBootStrap.Accordion>
    
    </div>
            </div>
        </>
    )
}

export default SupportBody;