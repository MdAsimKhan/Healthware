import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HospitalLogin() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState();
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // validate form
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);


    await fetch('http://localhost:3001/hospital').then(function (response) {
      return response.json();
    }).then(function (data) {
      data.map(async (ele) => {
        if (ele.email == formData.email && ele.password == formData.password) {
          // console.log('Success!')

          setSuccess(true);
      
          // const Rd = 
          // console.log(success)
          { success ? navigate(`/${ele._id}/hospital_dashboard`) : console.log('not working') }
        }

      })
      
  });

  return (
    <>
      <div className="container">
        <h1>Hospital login page</h1>
        {showError && (
          <Alert
            variant="danger"
            onClose={() => setShowError(false)}
            dismissible
          >
            Invalid email or password
          </Alert>
        )}
        <Form validated={validated} method="post" onSubmit={handleSubmit}>
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
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={handleChange}
              type="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}}

export default HospitalLogin;
