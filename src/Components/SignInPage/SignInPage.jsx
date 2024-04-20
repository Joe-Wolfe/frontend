import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Navigate, useNavigate } from 'react-router-dom';


import { useContext } from 'react';
import UserContext from '../../context/userContext';


function SignInPage({ signIn }) {

    const { setUser } = useContext(UserContext);
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        signIn(data, setUser).then((res) => {
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
            <h1>Sign Up</h1>

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <Button>Sign Up</Button>
            </Form>

        </div>
    );
}

export default SignInPage;