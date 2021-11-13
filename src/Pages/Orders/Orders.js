import React, { useEffect, useState } from 'react';
import { Col, Form, Image, Row, Button, Container, ButtonGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Orders = () =>
{
    const { id } = useParams();
    const [orders, setOrders] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    //Load book now service from mongodb
    useEffect(() =>
    {
        fetch(`https://guarded-gorge-39504.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [id]);

    const handleQuantity = state =>
    {
        if (state === true) {
            setQuantity(quantity + 1);
        }
        else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            };
        };
    };

    useEffect(() =>
    {
        setTotalPrice(Math.ceil(orders.price * quantity))
    }, [quantity, orders.price])

    //Store shipping info to mongodb
    const onSubmit = data =>
    {
        data.orderStatus = 'pending';
        data.orderInfo = { id: id, name: orders.name, quantity: quantity, totalPrice: totalPrice };

        fetch('https://guarded-gorge-39504.herokuapp.com/orders', {
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
                    alert('Order confirmed! Your products will deliver very soon...');
                    reset();
                }
            })
    };

    return (
        <Container className="bg-info shadow rounded my-5 p-5">
            <div className="d-lg-flex justify-content-center align-items-center text-center">
                <div className="d-lg-flex bg-light border rounded shadow p-3">
                    <div>
                        <Image src={orders.img} width="200px" height="200px" alt="Order Image" fluid thumbnail />
                    </div>
                    <div className="ms-3">
                        <h2 className="fw-bold fs-5 text-info overflow-hidden">Order Id: {orders._id}</h2>
                        <h3 className="fw-light fs-3">Name: {orders.name}</h3>
                        <h3 className="fw-light fs-3">Price: $ {orders.price}</h3>
                        <div className="d-flex justify-content-center align-items-center">
                            <h3 className="fw-light fs-3">Quantity:&nbsp;</h3>
                            <ButtonGroup size="sm" className="w-25">
                                <Button variant="outline-dark" onClick={() => handleQuantity(false)}><i className="fa fa-minus-circle" aria-hidden="true"></i></Button>
                                <Form.Control size="sm" type="text" value={quantity} readOnly />
                                <Button variant="outline-dark" onClick={() => handleQuantity(true)}><i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                            </ButtonGroup>
                        </div>
                        <h3 className="fw-light fs-3">
                            Total Round Price: $ {totalPrice}
                        </h3>
                    </div>
                </div>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="fw-bold text-center py-4">
                    <u>Your </u><span className="text-white"><u>Shipping</u></span><u> Information</u>
                </h2>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control {...register("name")} defaultValue={user.displayName} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control {...register("email")} type="email" defaultValue={user.email} required />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control {...register("address")} placeholder="Enter Your Address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control {...register("phone")} placeholder="+88 01x xxxx xxxx" required />
                </Form.Group>
                <Form.Group className="m-3 d-flex justify-content-center">
                    <Button type="submit" variant="dark" className="me-3 shadow">Confirm Your Order</Button>
                    <Button variant="danger" as={Link} to="/home">Cancel Order</Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Orders;