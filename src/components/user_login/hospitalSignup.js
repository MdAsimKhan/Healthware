import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HospitalLogin() {
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
          placeholder="Enter organisation name"
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
        <Form.Control required type="tel" placeholder="+91 8888888888" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="youremail@service.com"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="website">
        <Form.Label>Website</Form.Label>
        <Form.Control
          required
          type="url"
          placeholder="www.organisation_name.com"
        />
      </Form.Group>

      <Form.Select aria-label="Type">
        <option>--Select--</option>
        <option value="1">Government (Public Owned)</option>
        <option value="2">For-profit</option>
        <option value="3">Non-profit</option>
      </Form.Select>

      <Form.Group className="mb-3" controlId="date_estb">
        <Form.Label>Date Established</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/mm/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={15}
          required
        />
      </Form.Group>

      <Form.Group controlId="certificate" className="mb-3">
        <Form.Label>Upload Registration Certificate</Form.Label>
        <Form.Text className="text-muted">
          We might contact you for verification.
        </Form.Text>
        <Form.Control required type="file" accept=".pdf" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
  );
}

export default HospitalLogin;
