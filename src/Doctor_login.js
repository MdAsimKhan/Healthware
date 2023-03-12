import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Doctor_Login() {
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
          placeholder="Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="Email"
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder=" "
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control required type="tel" placeholder="+91 " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder=" "
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="Specialist">
        <Form.Label>Specialist</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder=" "
        />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="College">
        <Form.Label>College</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder=" "
        />
      </Form.Group>

      <Form.Select aria-label="Type">
        <option>--Select--</option>
        <option value="1">Government</option>
        <option value="2">Private</option>
      </Form.Select>

      
      <Form.Group className="mb-3" controlId="Experience">
        <Form.Label>Batch</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder=" "
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Batch">
        <Form.Label>Date Established</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={15}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Chamber">
        <Form.Label>Chamber</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder=" "
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="Chamber">
        <Form.Label>Chamber</Form.Label>
        <Form.Control
          required
          type="Chamber"
          placeholder="If Any "
        />
      </Form.Group>


      <Form.Group controlId="certificate" className="mb-3">
        <Form.Label>Upload Registration Certificate</Form.Label>
        <Form.Text className="text-muted">
          We might contact you for verification.
        </Form.Text>
        <Form.Control required type="file" accept=".pdf" />
      </Form.Group>

      <Form.Group controlId="certificate" className="mb-3">
        <Form.Label>Degree Certificate</Form.Label>
        <Form.Text className="text-muted">
          We might contact you for verification.
        </Form.Text>
        <Form.Control required type="file" accept=".pdf" />
      </Form.Group>

      <Form.Group controlId="certificate" className="mb-3">
        <Form.Label>Aadhar Card</Form.Label>
        <Form.Text className="text-muted">
          We might contact you for verification.
        </Form.Text>
        <Form.Control required type="file" accept=".pdf" />
      </Form.Group>

      <Form.Group controlId="certificate" className="mb-3">
        <Form.Label>Pan Card</Form.Label>
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

export default Doctor_Login;