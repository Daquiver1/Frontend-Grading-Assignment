import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Dashboard = () => {
  const [grades, setGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);

  
    
      
      
    useEffect(() => {
        const courses = [
            { id: 1, subject: "Programming  ", grade: "  A" },
            { id: 2, subject: "Algorithms  ", grade: "  C" },
            { id: 3, subject: "Calculus  ", grade: "  null" },
            { id: 4, subject: "Intro. to Computer Science  ", grade: "  A" },
            { id: 5, subject: "Hardware  ", grade: "  B" },
            { id: 6, subject: "Web Design  ", grade: "  A" },
            { id: 7, subject: "Economics  ", grade: "  A" },
            { id: 8, subject: "Discrete Mathematics  ", grade: "  C" },
            { id: 9, subject: "Circuit Design  ", grade: "  B" },
            { id: 10, subject: "Statistics  ", grade: "  C" },
            { id: 11, subject: "E-Business  ", grade: " B" },
            { id: 12,subject: "Computer Organization and Architecture  ",
              grade: "  B",},
            { id: 13, subject: "Critical Thinking  ", grade: "  A" },
            { id: 14, subject: "Academic Writing  ", grade: "  A" },
            { id: 15, subject: "African Studies  ", grade: "  B" },
            { id: 16, subject: "Software Evolution  ", grade: "  A" },
          ];
          setGrades(courses);
          const missing = courses.filter((grade) => grade.grade === null);
         setMissingGrades(missing)
    }, []);
    return (
      <div>
        <h2>Student Dashboard</h2>
        All Accumulated Grades:
        <h3>Overview</h3>
        <p> Your GPA is:3.0</p>
        <ul>
          <Container>
            
          {grades.map((grade, index) => (
           <Col className = "new"><li key={index}>
              {grade.subject}:{" "}
              {grade.grade !== null ? `${grade.grade}` : "N/A"}
            </li></Col>
          ))}
          
          </Container>
        </ul>
        {missingGrades.length > 0 && (
          <div>
            <h3>Alerts:Missing Grades!</h3>
            <ul>
              {missingGrades.map((missing, index) => (
                <li key={index}>{missing.subject}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };


export default Dashboard;
