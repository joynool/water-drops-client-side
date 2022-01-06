import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import Rating from 'react-rating';

/*---------------------------------------------------------
Implement HomeReviews to show customer review for home page
-----------------------------------------------------------*/
const HomeReviews = () =>
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
        <div id="reviews" className="bg-light my-3 py-3">
            <h2 className="fw-bold text-center">
                <u>Our </u><span className="text-info"><u>Happy</u></span><u> Customers</u>
            </h2>
            <Carousel>
                {
                    reviews.map(review => <Carousel.Item key={review._id}>
                        <Card className="w-75 text-center mx-auto my-5 shadow">
                            <Card.Header className='bg-info'>
                                <Card.Title className='text-white'>
                                    {review.productName}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="py-5">
                                <Card.Text className="fw-light">
                                    <span className="fs-3 text-muted border border-1 rounded-pill px-4 shadow-sm">
                                        Customer Feedback
                                    </span>
                                    <br />
                                    <span className='fs-4'>
                                        {review.feedback}
                                    </span>
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

export default HomeReviews;