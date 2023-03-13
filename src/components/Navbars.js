import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/NavBars.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
function Navbars() {
  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
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
              {isAuthenticated ? <Nav.Link><Link style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Login</Link></Nav.Link> : 
              <Nav.Link><Link style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => loginWithRedirect()} >Login</Link></Nav.Link>}
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