import { Form, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newAppointment = {
      date: appointmentDate,
      time: appointmentTime,
      doctor: doctorName,
      description: description,
    };

    setAppointments([...appointments, newAppointment]);

    setAppointmentDate("");
    setAppointmentTime("");
    setDoctorName("");
    setDescription("");
  }

  return (
    <div className="container">
      <h1>Book Doctor Appointment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="appointmentDate">
          <Form.Label>Appointment Date</Form.Label>
          <Form.Control
            type="date"
            value={appointmentDate}
            onChange={(event) => setAppointmentDate(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="appointmentTime">
          <Form.Label>Appointment Time</Form.Label>
          <Form.Control
            type="time"
            value={appointmentTime}
            onChange={(event) => setAppointmentTime(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="doctorName">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control
            type="text"
            value={doctorName}
            onChange={(event) => setDoctorName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Appointment
        </Button>
      </Form>
      <br />
      <h2>Appointment List</h2>
      <ListGroup>
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
      </ListGroup>
    </div>
  );
}

export default Appointment;
