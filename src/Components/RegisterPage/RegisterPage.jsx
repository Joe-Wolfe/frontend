import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Navigate, useNavigate } from 'react-router-dom';


import { useContext } from 'react';
import UserContext from '../../context/userContext';

function RegisterPage({ register }) {

    const { setUser } = useContext(UserContext);
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value
        }
        register(data, setUser).then((res) => {
            if (res.success) {
                navigateTo('/');
            }
            else {
                alert(res.error);
            }
        });

    }

    return (
        <div>
            <h1>Register Page</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>
    );
}

export default RegisterPage;