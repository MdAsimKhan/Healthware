import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function Login() {
  // const history = useHistory();
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [loginData, setLoginData] = useState();

  fetch('http://localhost:3001/hospital')
    .then(function (response) {
      // The API call was successful!
      return response.json();
    }).then(function (data) {
      // This is the JSON from our response
      console.log(data);
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });






  function  handleSubmit (event) {
    event.preventDefault();

    // if (username === 'user@gmail.com' && password === 'password') {
    //   console.log("login done")
    // } else {
    //   setShowError(true);
    // }
    console.log(setUsername,setPassword)
  }

  return (
    <div className="container">
      <h1>Login</h1>
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          Invalid email or password
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            type="email"
            placeholder="youremail@service.com"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;