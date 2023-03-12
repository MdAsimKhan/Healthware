import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Navbars() {
  return (
   
      <div className="navContainer">
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">HealthWare</Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="about">About</Nav.Link>
              </Nav.Item>
            </Nav>

          </Container>
        </Navbar>
      </div>
     
    

  );
}

export default Navbars;