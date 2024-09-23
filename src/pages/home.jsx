import React, {createContext, useState} from 'react'


function Home() {
    
    const [user, setUser] = useState(null);
    
    return (
        <div>
            <h1>Home Page Main</h1>
            <h2>Hello {user}</h2>
        </div>
    );
}

export default Home