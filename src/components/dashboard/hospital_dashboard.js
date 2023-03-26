import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import './components/dashboard/patientdashboard.css';

function HospitalDashboard() {
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
                            <Button variant="primary" href="h/profile">
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
                            <Button variant="primary" href="h/appointments">
                                Go to Appointments
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Patient list</Card.Title>
                            <Card.Text>
                                View your patient list.
                            </Card.Text>
                            <Button variant="primary" href="/Patient list">
                                Go to Patient List
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Prescription management</Card.Title>
                            <Card.Text>
                                View your Prescription management
                            </Card.Text>
                            <Button variant="primary" href="/">
                                Go to Prescription management
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                <Card>
                        <Card.Body>
                            <Card.Title>Communication tools</Card.Title>
                            <Card.Text>
                                View your Communication tools
                            </Card.Text>
                            <Button variant="primary" href="/bills">
                                Go to Communication tools
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                <Card>
                        <Card.Body>
                            <Card.Title>Medical charting</Card.Title>
                            <Card.Text>
                                View your Medical charting
                            </Card.Text>
                            <Button variant="primary" href="/bills">
                                Go to Medical charting
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                <Card>
                        <Card.Body>
                            <Card.Title>Analytics and reports</Card.Title>
                            <Card.Text>
                                View your Analytics and reports
                            </Card.Text>
                            <Button variant="primary" href="/bills">
                                Go to Analytics and reports
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default HospitalDashboard;
