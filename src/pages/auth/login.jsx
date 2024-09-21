import React, { useState, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function Login () {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = loginData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const onChanges = (e) => {
        setLoginData({
          ...loginData,
          [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <Form>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="text"
                placeholder="username"
                name='username'
                value={username} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="password" 
                placeholder="Password" 
                name='password' 
                value={password} 
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                Login
                </Button>
            </Form>

            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default Login;