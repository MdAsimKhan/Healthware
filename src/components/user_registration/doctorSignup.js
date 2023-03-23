import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";


function DoctorSignup() {
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState();
  const [success, setSucess] = useState(false)
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit =  (event) => {
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
    const data = formData;
    axios
      .post("http://localhost:3001/signup/doctor", data)
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
    ):(
    
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
        {/* <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          maxDate={Date.now()}
          dropdownMode="select"
        /> */}
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
