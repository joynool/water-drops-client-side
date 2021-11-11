import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';

const Reviews = () =>
{
    return (
        <Container className="bg-info rounded shadow my-4 py-4">
            <h2 className="fw-bold text-center">
                <u>Our </u><span className="text-white"><u>Happy</u></span><u> Customers</u>
            </h2>
            <Carousel>
                <Carousel.Item>
                    <Row xs={1} md={3} className="mx-lg-5 px-lg-5 text-center">
                        <Col className="d-flex justify-content-center align-content-center">
                            <Card className="m-3">
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>5 star</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Card.Title><small>By</small> Fatema Ahmed</Card.Title>
                                    <Card.Text>Email: mithun55@gmail.com</Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center align-content-center">
                            <Card className="m-3">
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>5 star</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Card.Title><small>By</small> Zakir Ahmed</Card.Title>
                                    <Card.Text>Email: mithun55@gmail.com</Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center align-content-center">
                            <Card className="m-3">
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>5 star</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Card.Title><small>By</small> Haroon Ahmed</Card.Title>
                                    <Card.Text>Email: mithun55@gmail.com</Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row xs={1} md={3} className="mx-lg-5 px-lg-5 text-center">
                        <Col className="d-flex justify-content-center align-content-center">
                            <Card className="m-3">
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>5 star</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Card.Title><small>By</small> Shima Ahmed</Card.Title>
                                    <Card.Text>Email: mithun55@gmail.com</Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center align-content-center">
                            <Card className="m-3">
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>5 star</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Card.Title><small>By</small> Moty Ahmed</Card.Title>
                                    <Card.Text>Email: mithun55@gmail.com</Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center align-content-center">
                            <Card className="m-3">
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>5 star</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Card.Title><small>By</small> Farooq Ahmed</Card.Title>
                                    <Card.Text>Email: mithun55@gmail.com</Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Reviews;