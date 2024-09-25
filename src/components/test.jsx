import axios from "axios";
import { useEffect, useState } from "react";


function Test() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/api/list/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            setData(error.data);
            console.log(error);
        });
    }, [])            
    
    const [data, setData] = useState([]);

    return (
        <div>
            <h1>API DATA</h1>
            <p>{data}</p>
        </div>
    );

}

export default Test;