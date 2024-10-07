import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Test() {

    const [data, setData] = useState([]);
    const [token, setToken] = useState('');
    const [refreshToken,setRefreshToken] = useState('');
    const [loginData, setLoginData] = useState({
        username: 'user1',
        password: 'platanos',
    });
    const { username, password } = loginData;

    const loginFunc = () => {
        axios.post('http://127.0.0.1:8000/api/token/', loginData)
        .then(response => {
            console.log(response.data);
            setToken(response.data.access);
            setRefreshToken(response.data.refresh);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const refreshFunc = () => {
        axios.post('http://127.0.0.1:8000/api/token/refresh/', {
            'refresh': refreshToken
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    return (
        <div>
            <h1>Test Component</h1>
            <Button onClick={loginFunc}>Login</Button>
            <Button onClick={refreshFunc}>Refresh</Button>
        </div>
    );

}

export default Test;