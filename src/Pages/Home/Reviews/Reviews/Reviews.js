import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';

/*-----------------------------------------------------
            Load all reviews from database
-------------------------------------------------------*/
const Reviews = () =>
{
    const [reviews, setReviews] = useState([]);

    useEffect(() =>
    {
        fetch('https://guarded-gorge-39504.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data =>
            {
                setReviews(data);
            });
    }, []);

    return (
        <div id="reviews" className="bg-info py-5">
            <h2 className="fw-bold text-center mb-5">
                <u>Our </u><span className="text-white"><u>Happy</u></span><u> Customers</u>
            </h2>
            <Container>
                {
                    (reviews.length === 0) ?
                        <div className="d-flex justify-content-center align-items-center py-5">
                            <Spinner animation="border" variant="dark" />
                        </div> :
                        <Row xs={1} md={4} className="g-3">
                            {
                                reviews.map(review => <Col key={review._id}>
                                    <Card className="text-center mx-auto shadow">
                                        <Card.Header>
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
                                </Col>
                                )
                            }
                        </Row>
                }
            </Container>
        </div>
    );
};

export default Reviews;