import React, { useEffect, useState } from 'react';
import { Col, Form, Image, Row, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Orders = () =>
{
    const { id } = useParams();
    const [orders, setOrders] = useState({});

    const { register, handleSubmit, reset } = useForm();

    //Load book now service from mongodb
    useEffect(() =>
    {
        fetch(`https://shielded-river.com/service/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [id]);

    //Store shipping info to mongodb
    const onSubmit = data =>
    {
        data.orderStatus = 'pending';
        data.orderInfo = { id: id, name: orders.name, price: orders.price, duration: orders.duration };

        fetch('https://shielded-river.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>
            {
                if (result.insertedId) {
                    alert('Order confirmed! Your products will deliver very soon');
                    reset();
                }
            })
    };

    return (
        <Container className="shadow rounded my-5 p-5">
            <div className="d-lg-flex justify-content-center align-items-center text-center">
                <h1 className="mx-5 fw-light">1.</h1>
                <div className="d-lg-flex border rounded p-3">
                    <div>
                        <Image src={orders.img} width="200px" height="200px" alt="Order Image" fluid thumbnail />
                    </div>
                    <div className="ms-3">
                        <h2 className="fw-bold fs-5 text-success overflow-hidden">Order Id: {orders._id}</h2>
                        <h3 className="fw-light fs-4">Name: {orders.name}</h3>
                        <h3 className="fw-light fs-4">Price: {orders.price}</h3>
                        <h3 className="fw-light fs-4">Duration: {orders.duration}</h3>
                    </div>
                </div>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="fw-bold fs-4 text-success text-center my-4">
                    <u>Your Shipping Information</u>
                </h2>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control {...register("name")} defaultValue="Mithoon" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register("email")} type="email" defaultValue="mithun55@gmail.com" required />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control {...register("address")} placeholder="Enter Your Address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control {...register("phone")} placeholder="+88 01x xxxx xxxx" required />
                </Form.Group>
                <Form.Group className="m-3 d-flex justify-content-center">
                    <Button type="submit" variant="success" className="me-3">Order Confirm</Button>
                    <Button variant="danger" as={Link} to="/home">Order Cancel</Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Orders;