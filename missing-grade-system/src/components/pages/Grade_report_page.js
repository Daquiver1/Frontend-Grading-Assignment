import React, {useState} from 'react';
import { Container, Table, ButtonGroup, Button } from 'react-bootstrap';

const GradeReport = () => {

 const data = [
    
    { course: 'YEAR 1', grade:'' , credit:'' },
    { course: 'FIRST SEMESTER', grade:'' , credit:'' },
   
    { course: 'Algebra and Trigonometry MATH 121', grade: 'B+', credit: 3 },
    { course: 'Vectors and Geometry MATH 123', grade: 'A', credit: 3 },
    { course: 'Introduction to Statistics and Probability 1 STATS 111', grade: 'A', credit: 3 },
    { course: 'Introduction to Computer Science DCIT 101', grade: 'B+', credit: 3 },
    { course: 'Office Productivity Tools DCIT 103', grade: 'B+', credit: 3 },
    { course: 'Academic Writing UGRC 110', grade: 'C', credit: 3 },
    
    

    { course: 'SECOND SEMESTER', grade:'' , credit:'' },
    { course: 'Calculus I MATH 122', grade: 'A', credit: 3 },
    { course: 'Algebra and Geometry MATH 126', grade: 'C+', credit: 3 },
    { course: 'Introduction to Statistics and Probability II STATS 112', grade: 'A', credit: 3 },
    { course: 'Fundamentals of Programming DCIT 104', grade: 'C', credit: 3 },
    { course: 'Hardware Fundamentals And Circuit DCIT 102', grade: 'B+', credit: 3 },
    { course: 'Critical Thinking And Logical Reasoning UGRC 150', grade: 'A', credit: 3 },
 ];

 const [filter, setFilter] = useState('');

 const filteredData = data.filter((item) => item.course.toLowerCase().includes(filter.toLowerCase()));

 
 return (
    <Container>
      <h1>Grade Report</h1>
      <ButtonGroup>
        <Button onClick={() => setFilter('YEAR 1')}>Year 1</Button>
        
        <Button onClick={() => setFilter('FIRST SEMESTER')}>First Semester</Button>

        <Button onClick={() => setFilter('SECOND SEMESTER')}>Second Semester</Button>
        
      </ButtonGroup>

      <Table striped bordered hover>
        <thead>

          <tr>
            
            <th>Course</th>
            <th>Grade</th>
            <th>Credit</th>
            
          </tr>

        </thead>

        <tbody>

        {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.course}</td>
              <td>{item.grade}</td>
              <td>{item.credit}</td>
              
            </tr>
        ))}
        </tbody>

      </Table>

    </Container>
 );
};

export default GradeReport;
