import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import {  FaBook, FaChartLine, FaUser, FaIdCard, FaComments, FaExclamationTriangle  } from 'react-icons/fa';
import Footer from './footer';


const DashboardPage = () => {
  return (
    <div>
       <Navigation/>
       
    <Container fluid style={{ backgroundColor: 'rgb(51, 166, 128)', color: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h1>Grade Report Dashboard</h1>
        </Col>
      </Row>
      <div className="dash">
      {/* Student Overview */}
          <Card className="big-grids">
            <Card.Body>
              <h2 className="text-center">Student Overview</h2>
              <h2 className="text-center1"><FaChartLine/>Current GPA: 3.8 | Class Average: 3.5</h2>
            </Card.Body>
          </Card>

      {/* Course List */}
          <Card className="big-grids">
            <Card.Body>
              <h2 className="text-center">Course List</h2>
               <h2 className="text-center2"><FaBook/> Course 1: A</h2> <ProgressBar className='progress-bar1' now={100} label="80%" />
               <h2 className="text-center2"><FaBook/> Course 1: A</h2> <ProgressBar className='progress-bar2' now={100} label="81%" />
               <h2 className="text-center2"><FaBook/> Course 1: B+</h2> <ProgressBar className='progress-bar3'now={100} label="79%" />
              <h2 className="text-center2"> <FaBook/> Course 1: B+</h2> <ProgressBar className='progress-bar4' now={100} label="77%" />
              <h2 className="text-center2"><FaBook/> Course 1: A</h2> <ProgressBar className='progress-bar5' now={100} label="83%" />
              <h2 className="text-center2"><FaBook/> Course 1: B</h2> <ProgressBar className='progress-bar6' now={100} label="70%" />
            </Card.Body>
          </Card>
          
          <div className="sidebox">
      {/* Announcements */}
          <Card className="small-grids2">
            <Card.Body >
              <h2 className="text-center3"><FaExclamationTriangle/><br/></h2> 
              <h2 className="text-center4"> Missing Grade: </h2 ><h2 className="text-center1">DCIT101</h2>
            </Card.Body>
          </Card>


      {/* Student Profile */}
          <Card className="small-grids">
            <Card.Body >
              <h2 className="text-center">Student Profile</h2>
              <h2 className="text-center1"><FaUser /> Name: Nana Kwame </h2>
              <h2 className="text-center1"> <FaIdCard /> ID: 11111111</h2>
            </Card.Body>
          </Card>
        
     

      {/* Feedback and Comments */}
          <Card className="small-grids">
            <Card.Body>
              <h2 className="text-center">Feedback and Comments</h2>
              <h2 className="text-center1"><FaComments /> Teacher's Comment: Good progress this semester.</h2>
            </Card.Body>
          </Card>
          </div>
          </div>
        
  
    </Container>
    
    <Footer/>
    </div>
  );
};

export default DashboardPage;