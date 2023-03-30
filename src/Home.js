import './css/Home.css';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <>
            <Container>

                <div className="App">

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
                            
                        


                        </div>
                    </Card>
                </div>
            </Container>
        </>
    );
}

export default Home;
