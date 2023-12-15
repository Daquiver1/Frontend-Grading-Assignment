import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './footer.css';

const MyFooter = () => {
  const newLocal = "text-muted";
  return (
    <Navbar className="navi" bg="warning" variant="dark">
      <Container>
        <Navbar.Text className="text-muted">
          © {new Date().getFullYear()} Iddrisu Muhammed Fareed / University of Ghana
        </Navbar.Text>
       </Container>
    </Navbar>
  );
};

export default MyFooter;
