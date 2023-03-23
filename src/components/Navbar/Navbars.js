import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../css/NavBars.css'
import { Link } from 'react-router-dom';
function Navbars() {
  return (

    <div className="navContainer">
      <Navbar expand="lg" variant="light" bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="/">HealthWare</Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}>Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/login'} >Login</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/signUp'} >SignUp</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/about'}>About</Link></Nav.Link>
            </Nav.Item>
          </Nav>

        </Container>
      </Navbar>
    </div>



  );
}

export default Navbars;