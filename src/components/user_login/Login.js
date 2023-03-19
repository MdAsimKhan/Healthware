import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function Login() {
  // const history = useHistory();
  const [username] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [loginData, setLoginData] = useState();

  const handleChange = (event) => {
    setLoginData({
      ...loginData,[event.target.name]: event.target.value,
    });
  };
  



  function handleSubmit(event) {
    event.preventDefault();
    
    if (username === 'user' && password === 'password') {
      // history.push('/dashboard');
    } else {
      setShowError(true);
    }
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
          onChange={handleChange}
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