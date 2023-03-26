import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import '../../css/patientdashboard.css';
function PatientDashboard() {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>My Profile</Card.Title>
                            <Card.Text>
                                View and update your profile information.
                            </Card.Text>
                            <Button variant="primary" href="p/profile">
                                Go to Profile
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>My Appointments</Card.Title>
                            <Card.Text>
                                View and manage your upcoming appointments.
                            </Card.Text>
                            <Button variant="primary" href="/appointments">
                                Go to Appointments
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>My Medical Records</Card.Title>
                            <Card.Text>
                                View and manage your medical records.
                            </Card.Text>
                            <Button variant="primary" href="/records">
                                Go to Medical Records
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>My Bills</Card.Title>
                            <Card.Text>
                                View and pay your bills online.
                            </Card.Text>
                            <Button variant="primary" href="/bills">
                                Go to Bills
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientDashboard;