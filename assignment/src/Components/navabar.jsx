import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Clement Cobby Konor</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default AppNavbar;