import React from 'react';
import { useForm } from "react-hook-form";
import { Col, Form, Row, Button } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import swal from 'sweetalert';

/*-----------------------------------------------------
    Implement add new review using react hook form
-------------------------------------------------------*/
const ReviewItem = () =>
{
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    //onSubmit handler to pass review to database
    const onSubmit = data =>
    {
        fetch('https://guarded-gorge-39504.herokuapp.com/reviews', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>
            {
                if (result.insertedId) {
                    swal("Thank you", "For sharing us your valuable review...", "success");
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
                        <Form.Control {...register("productName")} defaultValue="All Products of Water Drops" readOnly />
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
                            <Form.Control {...register("customerName")} defaultValue={user.displayName} required />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control {...register("customerEmail")} defaultValue={user.email} type="email" required />
                        </Form.Group>
                    </Row>
                    <Button variant="dark" type="submit" className="shadow">
                        Submit Your Review
                    </Button>
                </Form>
            </div>
        </div >
    );
};

export default ReviewItem;