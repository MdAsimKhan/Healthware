import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import axios from "axios";
import { redirect } from "react-router-dom";

function HospitalSignup() {
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState();
  const [otype, setotype] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate form
    setSelectedDate(selectedDate);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // data sent without form validaion
    axios
      .post("http://localhost:3001/signup/hospital", formData)
      .then((response) => console.log(response))
      .then(redirect("http://localhost:3000/login"))
      .catch((error) => console.log(error));
  };

  return (
    <Form
      noValidate
      validated={validated}
      method="post"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          onChange={handleChange}
          required
          type="text"
          placeholder="Enter organisation name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          onChange={handleChange}
          required
          type="text"
          placeholder="Manik Chowk, 226002, Jaunpur, UP"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          name="phone"
          onChange={handleChange}
          required
          type="tel"
          placeholder="+91 8888888888"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChange}
          required
          type="email"
          placeholder="youremail@service.com"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="website">
        <Form.Label>Website</Form.Label>
        <Form.Control
          name="website"
          onChange={handleChange}
          type="text"
          placeholder="www.organisation_name.com"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Select Organisation Type</Form.Label>
        <DatalistInput
          placeholder="Click here to select"
          items={[
            { id: "1", value: "Government" },
            { id: "2", value: "Non-Profit" },
            { id: "3", value: "Profit" },
          ]}
          onSelect={(item) => {
            setFormData({
              ...formData,
              type: item.value,
            });
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date_estb">
        <Form.Label>Date Established</Form.Label>
        <Form.Control
          name="date_estb"
          onChange={handleChange}
          required
          type="date"
          placeholder="dd/mm/yyyy"
        />
      </Form.Group>

      <Form.Group controlId="certificate" className="mb-3">
        <Form.Label>Upload Registration Certificate</Form.Label>
        <Form.Text className="text-muted">
          We might contact you for verification.
        </Form.Text>
        <Form.Control
          // name="registration_certificate"
          // onChange={handleChange}
          // required
          type="file"
          accept=".pdf"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
  );
}

export default HospitalSignup;
