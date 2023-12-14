// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Button, Badge, Alert, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DashboardPage = () => {
//   const [grades, setGrades] = useState([]);
//   const [missingSubjects, setMissingSubjects] = useState([]);

//   useEffect(() => {
//     fetchGrades();
//   }, []);

//   const fetchGrades = async () => {
//     try {
//       // Replace the URL with your actual API endpoint
//       const response = await fetch('https://api.example.com/student/grades');
//       const data = await response.json();
//       setGrades(data);

//       const missingSubjects = data.filter((grade) => grade.value === null).map((grade) => grade.subject);
//       setMissingSubjects(missingSubjects);
//     } catch (error) {
//       console.error('Error fetching grades:', error);
//     }
//   };

//   const calculateGPA = () => {
//     const totalGrades = grades.length;
//     const totalPoints = grades.reduce((sum, grade) => sum + (grade.value || 0), 0);
//     const gpa = totalGrades === 0 ? 0 : totalPoints / totalGrades;
//     return (gpa / 4) * 100;
//   };

//   const getGPAColor = () => {
//     const percentage = calculateGPA();
//     return percentage >= 80 ? 'success' : percentage >= 60 ? 'warning' : 'danger';
//   };

//   const getRandomFunFact = () => {
//     const funFacts = [
//       'Did you know? The first computer programmer was Ada Lovelace in the 19th century!',
//       'The term "bug" in computer science originated from an actual insect causing a malfunction.',
//       'The world’s first website was created at CERN by Tim Berners-Lee in 1991.',
//     ];
//     return funFacts[Math.floor(Math.random() * funFacts.length)];
//   };

//   return (
//     <Container className="mt-4">
//       <Row className="justify-content-center">
//         <Col className="text-center">
//           <Badge bg={getGPAColor()} className="p-3 text-white" style={{ fontSize: '24px', width: '100px', height: '100px' }}>
//             GPA<br /> {calculateGPA().toFixed(2)}%
//           </Badge>
//         </Col>
//       </Row>

//       {missingSubjects.length > 0 && (
//         <Alert variant="danger" className="mt-3">
//           Alert: Missing grades in {missingSubjects.join(', ')}
//         </Alert>
//       )}

//       <Row className="mt-4">
//         <Col md={6}>
//           <h3>Quick Links</h3>
//           <Button variant="primary" as={Link} to="/missing-grades" className="me-2">
//             Missing Grade Form
//           </Button>
//           <Button variant="primary" as={Link} to="/grade-report">
//             Grade Report
//           </Button>
//         </Col>

//         <Col md={6}>
//           <h3>Summary</h3>
//           <Row xs={1} md={2} className="g-4">
//             <Col>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Missing Grades</Card.Title>
//                   <Card.Text>{missingSubjects.length} grades are currently missing.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Achievements</Card.Title>
//                   {/* Replace with actual user data */}
//                   <ul>
//                     <li>Example Achievement 1</li>
//                     <li>Example Achievement 2</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Col>
//       </Row>

//       <Row className="mt-4">
//         <Col>
//           <h3>Fun Fact</h3>
//           <Card>
//             <Card.Body>
//               <Card.Text>{getRandomFunFact()}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DashboardPage;

import React from 'react';
import { Link } from 'react-router-dom';

const AppDashboard = () => {

  
  // Mock data for current grades
  const currentGrades = {
    DCIT201: { grade: 'A', score: 95 },
    DCIT206: { grade: 'B', score: 88 },
    CBAS210: { grade: 'A', score: 92 },
    DCIT203: { grade: 'B', score: 89 },
    MATHS223: { grade: 'A', score: 94 },
    DCIT207: { grade: '-', score: 96 },
    // Add more subjects as needed
  };

  // Missing grade names
  const missingGrades = ['DCIT205- Multimedia and web design'];

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <br />
      <div className="row g-2">
        {Object.entries(currentGrades).map(([subject, { grade, score }]) => (
          <div className="col-6" key={subject}>
            <div className="p-3 border bg-light">
              <div>
                <strong>{subject}</strong>
              </div>
              <div>
                <strong>Grade:</strong> {grade}
              </div>
              <div>
                <strong>Score:</strong> {score}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Danger callout for missing grades */}
      {missingGrades.length > 0 && (
        <div className="alert alert-danger mt-3">
          <strong>Missing Grades Alert:</strong> You have missing grades in the following subjects:
          <ul>
            {missingGrades.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="mt-3">
        <Link to="/GradeReport" className="btn btn-primary me-2">
          Grade Report
        </Link>
        <Link to="/MissingGradeForm" className="btn btn-danger">
          Missing Grade Form
        </Link>
      </div>
    </div>
  );
};

export default AppDashboard;


