import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";

function DoctorSignup() {
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState();
  const [success, setSucess] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

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

    // send data to backend
    axios
      .post("http://localhost:3001/signup/doctor", formData)
      .then((response) => console.log(response))
      .then(setSucess(true))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Doctor Registration completed</h1>
          <p>
            <a href="/login">Login</a>
          </p>
        </section>
      ) : (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              required
              type="text"
              placeholder="Dr Santosh Stark"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
              type="password"
              placeholder="Enter password"
            />
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={5}
              value={password}
              valueAgain={passwordAgain}
              onChange={(isValid) => {
                if (isValid) {
                  setFormData({
                    ...formData,
                    password: password,
                  });
                }
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              required
              type="Email"
              placeholder="youremail@service.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="phone"
              required
              type="tel"
              placeholder="+91 888888888"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="DOB">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              name="date_estb"
              onChange={handleChange}
              required
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </Form.Group>

          {/* make it list type */}
          {/* <Form.Group className="mb-3" controlId="Specialisation">
        <Form.Label>Specialisation</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="specialisation"
          required
          type="text"
          placeholder="Orthopaedics"
        />
      </Form.Group> */}

          <Form.Group controlId="certificate" className="mb-3">
            <Form.Label>Upload Registration Certificate</Form.Label>
            <Form.Text className="text-muted m-3">
              We might contact you for verification.
            </Form.Text>
            <Form.Control
              onChange={handleChange}
              name=""
              // required
              type="file"
              accept=".pdf"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
      )}
    </>
  );
}

export default DoctorSignup;
