import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = () =>
{
    const [reviews, setReviews] = useState([])

    useEffect(() =>
    {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data =>
            {
                setReviews(data)
            });
    }, []);

    return (
        <div id="reviews" className="bg-info my-3 py-3">
            <h2 className="fw-bold text-center">
                <u>Our </u><span className="text-white"><u>Happy</u></span><u> Customers</u>
            </h2>
            <Carousel>
                {
                    reviews.map(review => <Carousel.Item key={review._id}>
                        <Card className="w-75 text-center mx-auto my-5 shadow">
                            <Card.Header>
                                <span className="text-muted">Our Product Name</span>
                                <Card.Title>
                                    {review.productName}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="py-5">
                                <Card.Text className="fs-3 fw-light">
                                    <span className="text-muted">
                                        <u>Customer Feedback</u>
                                    </span>
                                    <br />
                                    {review.feedback}
                                </Card.Text>
                                <Card.Text style={{ color: "goldenrod", fontSize: "1.2rem" }} className="bg-white rounded">
                                    <span className="text-muted">Customer Rating: </span>
                                    <Rating
                                        initialRating={review.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly
                                    />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Card.Title>
                                    <small>Our Happy Customer</small>
                                    <br />
                                    {review.customerName}
                                </Card.Title>
                                <Card.Text>{review.customerEmail}</Card.Text>
                            </Card.Footer>
                        </Card>
                    </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Review;