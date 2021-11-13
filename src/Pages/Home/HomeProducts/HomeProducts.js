import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner, Button, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const HomeProducts = () =>
{
    const [homeProducts, setHomeProducts] = useState([])

    const size = 6;
    useEffect(() =>
    {
        fetch(`http://localhost:5000/products?size=${size}`)
            .then(res => res.json())
            .then(data =>
            {
                setHomeProducts(data)
            });
    }, []);

    return (
        <div id="products" className="bg-info mb-3 mb-lg-3">
            <Container>
                <h2 className="fw-bold text-center pt-5">
                    <u>Our </u><span className="text-white"><u>Top</u></span><u> Products</u>
                </h2>
                {
                    (homeProducts.length === 0) ?
                        <div className="d-flex justify-content-center align-items-center py-5">
                            <Spinner animation="border" variant="dark" />
                        </div> :
                        <Row xs={1} md={3} className="g-4 py-4 py-lg-5">
                            {
                                homeProducts.map(product => <Col key={product._id}>
                                    <Card className="shadow p-2">
                                        <Card.Img variant="top" src={product.img} alt="Service Image" className="img-thumbnail" />
                                        <Card.Body>
                                            <Card.Title className="fw-light fs-3">{product.name}</Card.Title>
                                            <Card.Text className="text-muted">
                                                {product.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Body className="d-flex justify-content-between">
                                            <Card.Text className="fw-bold">
                                                Price: $ {product.price}
                                            </Card.Text>
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

export default HomeProducts;