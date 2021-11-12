import React, { useState } from 'react';
import { Container, Form, Button, Image, Spinner, Alert } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import login from './../../../images/login.png';

const Login = () =>
{
    const [isLogin, setIsLogin] = useState(false);
    const { loginUser, registerUser, isLoading, authError, setAuthError } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const location = useLocation();
    const history = useHistory();

    const toggleLogin = e =>
    {
        setIsLogin(e.target.checked);
        setAuthError('');
        reset();
    };

    const onSubmit = data =>
    {
        if (data.name) {
            if (data.password !== data.password2) {
                alert('Your password did not match !');
                return;
            };
            registerUser(data.email, data.password, data.name, history);
            setLoginSuccess(true);
            reset();
        }
        else {
            loginUser(data.email, data.password, location, history);
            setLoginSuccess(true);
            reset();
        };
    };

    return (
        <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
            <Image src={login} alt="login background" fluid width="700" className="ms-lg-5 ps-lg-5" />
            <Container style={{ width: '20rem' }} className="bg-info rounded p-3 shadow">
                <h3 className="fw-normal text-center text-light py-2">
                    {
                        isLogin ? "Register your account" : "Login your account"
                    }
                </h3>
                <Form className="d-flex justify-content-center align-items-center fs-5 fw-light border rounded my-2">
                    <p className="mb-0">LOGIN&nbsp;&nbsp;</p>
                    <Form.Check
                        onChange={toggleLogin}
                        type="switch"
                        id="custom-switch"
                    />
                    <p className="mb-0">REGISTER</p>
                </Form>
                {
                    isLogin ?
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control {...register("name")} type="text" placeholder="Enter Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control {...register("email")} type="email" placeholder="Enter Your Email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridPassword">
                                <Form.Label>Your Password</Form.Label>
                                <Form.Control {...register("password")} type="password" placeholder="Enter Your Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridPassword2">
                                <Form.Label>ReType Your Password</Form.Label>
                                <Form.Control {...register("password2")} type="password" placeholder="ReType Your Password" required />
                            </Form.Group>
                            <Form.Group className="text-center mb-2 px-4 rounded-pill">
                                <Button className="mb-2 px-4 rounded-pill" variant="outline-dark" type="submit">
                                    Register
                                </Button>
                            </Form.Group>
                            {isLoading && <Spinner animation="border" variant="info" />}
                            {loginSuccess && <Alert variant="success">User created successfully !</Alert>}
                            {authError && <Alert variant="danger">{authError}</Alert>}
                        </Form>
                        :
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control {...register("email")} type="email" placeholder="Enter Your Email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridPassword">
                                <Form.Label>Your Password</Form.Label>
                                <Form.Control {...register("password")} type="password" placeholder="Enter Your Password" required />
                            </Form.Group>
                            <Form.Group className="text-center">
                                <Button className="mb-2 px-4 rounded-pill" variant="outline-dark" type="submit">
                                    Login
                                </Button>
                            </Form.Group>
                            {isLoading && <Spinner animation="border" variant="info" />}
                            {loginSuccess && <Alert variant="success">Login successfully !</Alert>}
                            {authError && <Alert variant="danger">{authError}</Alert>}
                        </Form>
                }

            </Container>

        </div>
    );
};

export default Login;