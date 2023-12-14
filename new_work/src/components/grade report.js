import React from 'react';
import { Container, Table, Carousel, Form } from 'react-bootstrap';

const AppGradeReport = () => {
  const gradeData = [
    { course: 'Mathematics', grade: 'A' },
    { course: 'English', grade: 'B' },
    { course: 'Science', grade: 'A-' },
    // Add more courses and grades as needed
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Grade Report</h1>
      
      {/* Carousel */}
      <Carousel>
        {/* Add Carousel Items here */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x300"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Some content for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel Items as needed */}
      </Carousel>
      
      {/* Grade Table */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {gradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.course}</td>
              <td>{data.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      {/* Form with Floating Labels */}
      <Form className="mt-4">
        <Form.Floating className="mb-3">
          <Form.Control id="floatingInput" type="text" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </Form.Floating>
        {/* Add more form fields as needed */}
      </Form>
    </Container>
  );
};

export default AppGradeReport;
