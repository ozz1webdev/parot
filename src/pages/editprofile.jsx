import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TokenRefresh } from '../components/tokenRefresh';

function EditProfile () {

    const token = localStorage.getItem('access_token');

    const [userId, setUserId] = useState(null);
    const [firstname, setFirstName] = useState('');
    const [Lastname, setLastName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [about, setAbout] = useState('');
    const [profileImage, setProfileImage] = useState('');

    const history = useHistory();


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/profile/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setUserId(response.data.id);
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setSelectedDate(response.data.birthday);
            setEmail(response.data.email);
            setCity(response.data.city);
            setCountry(response.data.country);
            setAbout(response.data.about);
            setProfileImage(response.data.profile_image);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);


    const onChanges = (e) => {
        if (e.target.name === 'selectedDate') {
            setSelectedDate(e.target.value);
        } 
        else if (e.target.name === 'email') {
            setEmail(e.target.value);
        }
        else if (e.target.name === 'city') {
            setCity(e.target.value);
        }
        else if (e.target.name === 'country') {
            setCountry(e.target.value);
        }
        else if (e.target.name === 'about') {
            setAbout(e.target.value);
        }
        else if (e.target.name === 'firstname') {
            setFirstName(e.target.value);
        }
        else if (e.target.name === 'lastname') {
            setLastName(e.target.value);
        }
        else if (e.target.name === 'profileImage') {
            setProfileImage(e.target.value);
        }
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:8000/api/profile/update/', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            profileImage: profileImage,
            first_name: firstname,
            last_name: Lastname,
            birthday: selectedDate,
            email: email,
            city: city,
            country: country,
            about: about
        })
        .then((response) => {
            console.log(response.data);
            history.push('/profile');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <img src={profileImage} alt="Profile Picture" />
            <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="profileImage">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                type="file"
                onChange={onChanges}
                placeholder="Profile Picture" 
                name='profileImage'
                value={profileImage}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="text"
                placeholder="Firstname"
                name='firstname'
                value={firstname} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="text" 
                placeholder="Lastname" 
                name='lastname' 
                value={Lastname} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Birthdate">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="date" 
                placeholder="Birthdate"
                name='Birthdate' 
                value={selectedDate} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="email" 
                placeholder="Email" 
                name='email' 
                value={email} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="text" 
                placeholder="City" 
                name='city' 
                value={city} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="text" 
                placeholder="Country" 
                name='country' 
                value={country} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="about">
                <Form.Label>About</Form.Label>
                <Form.Control
                onChange={onChanges}
                type="text" 
                placeholder="About" 
                name='about' 
                value={about} 
                />
            </Form.Group>
                <Button variant="primary" type="submit">
                Save
                </Button>
                <Button variant="primary" type="submit" onClick={() => history.goBack()}>
                Cancel
                </Button>
            </Form>



        </div>
    );
}

export default EditProfile;