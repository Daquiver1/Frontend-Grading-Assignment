import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaUserTie } from 'react-icons/fa';

const instructors = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+9876543210',
  },
  // Add two more instructors as needed
];

const InstructorContact = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-4">Instructors</h1>
      <Row>
        {instructors.map((instructor, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <div className="text-center">
              <FaUserTie size={50} className="mb-3" />
              <h4>{instructor.name}</h4>
              <p>
                <AiOutlineMail className="mr-2" />
                <a href={`mailto:${instructor.email}`}>{instructor.email}</a>
              </p>
              <p>
                <AiOutlinePhone className="mr-2" />
                {instructor.phone}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InstructorContact;
