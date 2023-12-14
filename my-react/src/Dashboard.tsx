
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img8 from './images/dash.png'
import './Dashboard.css'
import Footer from "./component/Footer";

function Dashboard () {
  
  return (
    <Container>
      <h1 className="mt">Student Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="card">
            <Card.Body>
              <Card.Title className="tit">Student Information</Card.Title>
              <Card.Text>
                Name: Nana Afua Antwiwaa Conduah
                <br />
                Roll Number:  11179865
                <br />
                GPA:  Pending
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="card">
            <Card.Body>
              <Card.Title className="tit">Current Courses</Card.Title>
              <Card.Text>
                <ul>
                  <li>DCIT 301 Operating Systems</li>
                  <li>DCIT 303 Computer Networks</li>
                  <li>DCIT 305 Database Fundamentals</li>
                  <li>DCIT 313 Introduction to Artificial Intelligence</li>
                  <li>DCIT 317 IT Project Management</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        
      </Row>
      <h1 className="over">Overall Grades Acquired</h1>
      <img className="dash" alt="" title=" " src={img8}></img>
      <div>
     <Footer/>
     </div>
   
    </Container>
    
  );
};

export default Dashboard;
