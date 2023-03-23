import './css/Home.css';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function card_Info(user) {
    return (
        <>
            <Card className='smlCard' style={{ width: '100%' }}>
                <Card.Header className='cardHeader'>{user}</Card.Header>
                <Link to={`signup/`+user} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                    <Card.Body>
                        <Card.Title className='cardTitle'>Sign UP</Card.Title>
                        <Card.Text className='cardText'>
                            We care for you
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </>

    );
}


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
                            {card_Info("Hospital")}
                            {card_Info("Doctor")}
                            {card_Info("Patient")}
                        


                        </div>
                    </Card>
                </div>
            </Container>
        </>
    );
}

export default Home;
