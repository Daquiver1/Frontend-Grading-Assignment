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
        <Container>
          <Row>
            
            <Col md={8} className="text-center">
              <h1>Missing Grade Reporting system</h1>
              <p className="lead">
                Welcome to the system designed to help you track and report missing grades.
              </p>
            </Col>
          </Row>
          
        </Container>
      </header>
    </div>
    < Footer />
    </div>
  );
}

export default App;
