import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Col, Form, Row, Button } from 'react-bootstrap';

const ReviewItem = () =>
{
    const { productName } = useParams();
    const { register, handleSubmit, reset } = useForm();

    //Create new service to mongodb
    const onSubmit = data =>
    {
        fetch('http://localhost:5000/reviews', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>
            {
                if (result.insertedId) {
                    alert('Successfully added your new service');
                    reset();
                }
            });
    };

    return (
        <div className="container bg-info shadow rounded my-5 p-5">
            <h2 className="fw-bold text-center pt-5">
                <u>Give </u><span className="text-white"><u>Your Valuable Review</u></span><u> Here</u>
            </h2>
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control {...register("productName")} defaultValue={productName} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Share Your Review</Form.Label>
                        <Form.Control {...register("feedback")} placeholder="Kindly share your feedback with us" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Share Your Rating</Form.Label>
                        <Form.Control {...register("rating")} placeholder="Kindly share your rating with us" type="number" min="1" max="5" required />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control {...register("customerName")} defaultValue="Sk. Md. Joynool Abedin" required />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control {...register("customerEmail")} defaultValue="mithun55@gmail.com" type="email" required />
                        </Form.Group>
                    </Row>
                    <Button variant="dark" type="submit">
                        Submit Your Review
                    </Button>
                </Form>
            </div>
        </div >
    );
};

export default ReviewItem;