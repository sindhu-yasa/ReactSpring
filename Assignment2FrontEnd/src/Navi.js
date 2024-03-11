import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navi() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Assignment2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
            <Nav.Link href="https://api.nasa.gov/">NASA OPEN API's</Nav.Link>
            <Nav.Link href="https://github.com/sindhu-yasa/WebEngineeringSpringAPI">Springboot code</Nav.Link>
            <Nav.Link href="https://github.com/sindhu-yasa/WebEngineeringSpringAPI">React code</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
      }