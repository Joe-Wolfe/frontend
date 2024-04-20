import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { findUser } from '../../API';
import { useState } from 'react';

import { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext';
import './User.css';

function User({ updateUser }) {

    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');



    const { setUser } = useContext(UserContext);
    const navigateTo = useNavigate();


    useEffect(() => {
        findUser().then((user) => {
            setUser(user);
            setProfile(user);
            setUsername(user.username);
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setIsLoading(false);
        });

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value
        }
        updateUser(data, setUser).then((res) => {
            if (res.success) {
                navigateTo('/');
            }
            else {
                alert(res.error);
            }
        });

    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className='user-container'>
            <div style={{ marginLeft: '10px' }} className='user-title'>{username}'s profile</div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>
    );
}

export default User;