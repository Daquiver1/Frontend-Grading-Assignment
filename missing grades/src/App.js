import React from 'react';
import { Container, Row, Col, Button ,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './nav';
import Footer from './Footer';

function App() {
  return (
    <div>
      <MyNav />
    <div className="App">
        <header className="App-header">
          
          <div className='missingGrades'>
            <Container>
        <Row>
          
          <Col md={9} className="mt-4">
            <header className="App-header">
              <h1>Welcome To The University Of Ghana Missing Grade Reporting System</h1>
              <p className="lead">
                Welcome to the system designed to help you track and report missing grades.
              <p></p>
                      <p> Please Login To Continue </p>
                    </p>
                 
            </header>
          </Col>
        </Row>
          </Container>
            </div>
          
          <div>
           <Container>
          <Row >
            <Col>
              <Button className='app-buttons' size="lg" href="/login">
                Click To Login
              </Button>
            </Col>
          </Row>
            </Container>

            
            </div>
      </header>
    </div>
    < Footer />
    </div>
  );
}

export default App;
