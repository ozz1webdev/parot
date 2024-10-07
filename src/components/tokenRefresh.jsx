import axios from "axios";
import { useHistory, Redirect } from 'react-router-dom';

export const TokenRefresh = () => {

    const refresh_token = localStorage.getItem('refresh_token');

    try {
        const history = useHistory();

        const response = axios.post('http://127.0.0.1:8000/api/token/refresh/', {
            'refresh': refresh_token
        });
        console.log(response.status);
        if(response.status == 200) {
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('token', true);
        }
        else if (response.status == 400) {
            localStorage.clear();
            history.push('/login');
            history.go(0);
        }
    }
    catch(err) {
        localStorage.clear();
    }
}

