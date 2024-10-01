import React, {createContext, useState, useEffect} from 'react'


function Home() {
    
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const username = localStorage.getItem('username')
        if (username) {
            setUser(username)
        }
    }, [])

    return (
        <div>
            <h1>Home Page Main</h1>
            {user ? (
            <>
                <h2>Hello {user}</h2>
            </>
            ):(
            <>
                <h2>Please Login</h2>
            </>
        )}
        </div>
    );
}

export default Home