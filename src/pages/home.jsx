import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';
import Test from '../components/test';

function Home() {
    
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setUser(localStorage.getItem('username'));
        setUserId(localStorage.getItem('userId'));
    }, []);

    return (
        <div>
            <h1>Home Page Main</h1>
            {user ? (
            <>
                <h2>Hello {user} with user id : {userId}</h2>
            </>
            ):(
            <>
                <h2>Please Login</h2>
            </>
        )}

        <Test />

        </div>
    );
}

export default Home