import './App.css';
// import { Route, Routes, Router } from 'react-router-dom';
import Navbars from './Navbars';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function App() {
  return (
    // <Router>
    <Container>
      <div className="App">
        <Navbars />
        <br />
        <Card className="bg-dark text-white">
          <Card.Img src="./gradd.jpg" className="images" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title >Welcome to the HealthWare</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.ImgOverlay>

          <div className='cardContainer'>
          <Card className='smlCard' style={{ width: '33.3%' }}>
              <Card.Header className='cardHeader'>Header</Card.Header>
              <Card.Body>
                <Card.Title className='cardTitle'>Light Card Title</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          <Card className='smlCard' style={{ width: '33.3%' }}>
              <Card.Header className='cardHeader'>Header</Card.Header>
              <Card.Body>
                <Card.Title className='cardTitle'>Light Card Title</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          <Card className='smlCard' style={{ width: '33.3%' }}>
              <Card.Header className='cardHeader'>Header</Card.Header>
              <Card.Body>
                <Card.Title className='cardTitle'>Light Card Title</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card >
          </div>
        </Card>


      </div>
    </Container>
    // </Router>
  );
}

export default App;
