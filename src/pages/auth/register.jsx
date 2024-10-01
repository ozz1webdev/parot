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
    password2: '',
    email: ''
  });

  const { username, password, password2, email } = registerData;
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
      const response = await axios.post('http://127.0.0.1:8000/api/register/', registerData, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        console.log("response: ", response);
        history.push('/login');
      })
      .catch((error) => {
        setErrors(error.response.data);
        console.log(error.response.data);
      });
  };
  

  return (
    <div>
        <h1>Register</h1>
        <Form onSubmit={formSubmit}>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              onChange={onChanges} 
              type="email" 
              placeholder="Email Address" 
              name='email' 
              value={email} />
        </Form.Group>


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

        <Form.Group className="mb-3" controlId="password2">
            <Form.Label>Enter Password Again</Form.Label>
            <Form.Control 
              onChange={onChanges} 
              type="password" 
              placeholder="Password" 
              name='password2' 
              value={password2} />
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