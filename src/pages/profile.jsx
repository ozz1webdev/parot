import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { TokenRefresh } from '../components/tokenRefresh';

function Profile() {
    const [user_id, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [about, setAbout] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [photosCount, setPhotosCount] = useState([]);
    const [followersCount, setFollowersCount] = useState([]);
    const [followingCount, setFollowingCount] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        axios.get('http://127.0.0.1:8000/api/profile/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data);
            setUser(localStorage.getItem('username'));
            setUserId(response.data.id);
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setBirthday(response.data.birthday);
            setEmail(response.data.email);
            setCity(response.data.city);
            setCountry(response.data.country);
            setAbout(response.data.about);
            setProfileImage(response.data.profile_picture);
            setPhotosCount(response.data.photosCount);
            setFollowersCount(response.data.followersCount);
            setFollowingCount(response.data.followingCount);
            console.log(response.status);

        })
        .catch(error => {
            console.log(error);
            history.push('/login');
            history.go(0);
        });
    }, [])

    const history = useHistory();
    const editProfile = () => {
        history.push('/editprofile');
    }

    return (
        <div>
            <img src={profileImage} alt="profile" height="200"></img><br></br>
            <Button className="btn btn-sm btn-primary" onClick={editProfile}>Edit Profile</Button>
            <h1>Profile Page</h1>
            <p>User ID: {user_id}</p>
            <p>Username: {user}</p>
            <p>First Name: {first_name}</p>
            <p>Last Name: {last_name}</p>
            <p>Birthday: {birthday}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <p>Country: {country}</p>
            <p>About: {about}</p>
            <p>Photos Count: {photosCount}</p>
            <p>Followers Count: {followersCount}</p>
            <p>Following Count: {followingCount}</p>
        </div>

    );
}

export default Profile;