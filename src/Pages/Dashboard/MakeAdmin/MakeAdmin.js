import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

/*-------------------------------------------------------
        Implement make new admin role functionality
---------------------------------------------------------*/
const MakeAdmin = () =>
{
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data =>
    {
        const user = data;
        fetch('https://guarded-gorge-39504.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount) {
                    setSuccess(true);
                    reset();
                };
            });
    };

    return (
        <Container className="bg-info rounded shadow my-5 px-5">
            <h2 className="fw-bold text-center pt-3">
                <u>Make </u><span className="text-white"><u>Admin</u></span><u> Panel</u>
            </h2>
            <Form onSubmit={handleSubmit(onSubmit)} className="mx-lg-5 px-lg-5">
                <Form.Group className="mb-3">
                    <Form.Label>User Email</Form.Label>
                    <Form.Control {...register("email")} type="email" defaultValue={user.email} required />
                </Form.Group>
                <Form.Group className="text-center">
                    <Button variant="dark" type="submit" className="shadow mb-4">
                        Make Admin
                    </Button>
                </Form.Group>
                {success && <Alert variant="success">Congrats...You have the power of Admin role</Alert>}
            </Form>
        </Container>
    );
};

export default MakeAdmin;