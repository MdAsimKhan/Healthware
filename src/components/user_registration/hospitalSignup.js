import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Registration from "./registration_done";
function HospitalSignup() {


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
    const data = formData;

    axios
      .post("http://localhost:3001/signup/hospital", data)
      .then((response) => console.log(response))
      .then(setSucess(true))
      .catch((error) => console.log(error))
  }



  return (
    <>
      {success ? (
        <section>
          <Registration />
        </section>
      ) : (

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
              type="url"
              placeholder="www.organisation_name.com"
            />
          </Form.Group>

          {/* set onChange */}
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Select onChange={handleChange} name="type">
                <option>--Select--</option>
                <option value="1">Government</option>
                <option value="2">For-profit</option>
                <option value="3">Non-profit</option>
            </Form.Select>
          </Form.Group>

          {/* set onChange */}
          <Form.Group className="mb-3" controlId="date_estb">
            <Form.Label>Date Established</Form.Label>
            <DatePicker
              name="date_estb"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={Date.now}
              required
              
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
      )}
    </>
  );
}

export default HospitalSignup;
