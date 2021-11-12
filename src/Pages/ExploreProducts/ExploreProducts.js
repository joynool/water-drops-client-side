import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreProducts = () =>
{
    const [products, setProducts] = useState([])

    useEffect(() =>
    {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>
            {
                setProducts(data)
            });
    }, []);

    return (
        <div id="explore-product" className="bg-info">
            <Container>
                <h2 className="fw-bold text-center pt-5">
                    <u>Explore </u><span className="text-white"><u>Our</u></span><u> Products</u>
                </h2>
                {
                    (products.length === 0) ?
                        <div className="d-flex justify-content-center align-items-center py-5">
                            <Spinner animation="border" variant="success" />
                        </div> :
                        <Row xs={1} md={3} className="g-4 py-4 py-lg-5">
                            {
                                products.map(product => <Col key={product._id}>
                                    <Card className="shadow p-2">
                                        <Card.Img variant="top" src={product.img} alt="Service Image" className="img-thumbnail" />
                                        <Card.Body>
                                            <Card.Title className="fw-light fs-3">{product.name}</Card.Title>
                                            <Card.Text className="text-muted">
                                                {product.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Body className="d-flex justify-content-between">
                                            <Card.Text>
                                                Price: $ {product.price}
                                            </Card.Text>
                                            <Button as={Link} to={`/review-item/${product.name}`} variant="dark">Review Item</Button>
                                            <Button as={Link} to={`/order/${product._id}`} variant="outline-dark">Order Now</Button>
                                        </Card.Body>
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

export default ExploreProducts;