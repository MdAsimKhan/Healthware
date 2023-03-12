import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PatientSignup() {
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // setSelectedDate(selectedDate);
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Manik Chowk, 226002, Jaunpur, UP"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control required type="tel" placeholder="+91 XXXXXXXXXX" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phn">
        <Form.Label>Emergency contact information</Form.Label>
        <Form.Control required type="tel" placeholder="+91 XXXXXXXXXX" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="youremail@service.com"
        />
      </Form.Group>

    
      
      <Form.Select aria-label="Type">
        <option>--Select Blood Group--</option>
        <option value="1">O+</option>
        <option value="2">O-</option>
        <option value="3">A+</option>
        <option value="4">A-</option>
        <option value="5">B+</option>
        <option value="6">B-</option>
        <option value="7">AB+</option>
        <option value="8">AB-</option>
      </Form.Select>

      <Form.Select aria-label="Type">
        <option>--Select Gender--</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Other</option>
      </Form.Select>

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label>Date of birth</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="DD/MM/YYYY"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={15}
          required
        />
      </Form.Group>


      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
  );
}

export default PatientSignup;