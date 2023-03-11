import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Navbars() {
  return (
    <div classNAme="navContainer">
      <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#">HealthWare</Navbar.Brand>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-2">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">Signup</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Login</Nav.Link>
            </Nav.Item>

          </Nav>

        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;