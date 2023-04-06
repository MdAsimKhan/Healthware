import { Form, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Appointment() {
  const [formData, setFormData] = useState();
  const [success, setSucess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // validate from
    axios
      .post("http://localhost:3001/p/appointments", formData)
      .then((response) => console.log(response))
      .then(setSucess(true))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Appointment Successfully Booked</h1>
          <p>
            <a href="/">Login</a>
          </p>
        </section>
      ) : (
        <div className="container">
          <h1>Book Doctor Appointment</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="appointmentDate">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                placeholder="Choose Appoitment Date"
                required
                // value={appointmentDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="appointmentTime">
              <Form.Label>Appointment Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                placeholder="Choose Appoitment Time"
                required
                // value={appointmentTime}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="doctorName">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control
                type="text"
                name="doctor"
                placeholder="Choose Doctor"
                required
                // value={doctorName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Describe your problem"
                required
                rows={3}
                // value={description}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Book Appointment
            </Button>
          </Form>
          {/* <br />
      <h2>Appointment List</h2> */}
          {/* <ListGroup>
        {appointments.map((appointment, index) => (
          <ListGroup.Item key={index}>
            <div>
              <strong>Date:</strong> {appointment.date}
            </div>
            <div>
              <strong>Time:</strong> {appointment.time}
            </div>
            <div>
              <strong>Doctor:</strong> {appointment.doctor}
            </div>
            <div>
              <strong>Description:</strong> {appointment.description}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup> */}
        </div>
      )}
    </>
  );
}

export default Appointment;
