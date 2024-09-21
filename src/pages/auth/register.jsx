import React, { useState, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function Register() {
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = registerData;

  const [errors, setErrors] = useState({});

  const onChanges = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', registerData);
      history.push('/login');
    }
    catch(err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
        <h1>Register</h1>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={onChanges} 
              type="text"
              placeholder="username"
              name='username'
              value={username} />
          </Form.Group>
          {errors.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>{message}</Alert>
          ))}

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              onChange={onChanges} 
              type="password" 
              placeholder="Password" 
              name='password' 
              value={password} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
        </Form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;