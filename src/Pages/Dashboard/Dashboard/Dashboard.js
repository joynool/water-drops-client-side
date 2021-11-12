import React from 'react';
import { Tab, Row, Col, Nav, Fade, Button } from 'react-bootstrap';
import { AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import useAuth from '../../../hooks/useAuth';
import ReviewItem from '../../Home/Reviews/ReviewItem/ReviewItem';
import Reviews from '../../Home/Reviews/Reviews/Reviews';
import MyOrder from '../MyOrder/MyOrder';

const Dashboard = () =>
{
    const { logout } = useAuth();

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="m-0 p-0">
                    <Col sm={2} className="bg-light">
                        <Nav variant="tabs" className="justify-content-center align-items-center fs-4 py-3">
                            <AiOutlineDashboard />&nbsp;Dashboard
                        </Nav>
                        <Nav variant="tabs" className="flex-column my-4">
                            <Nav.Item>
                                <Nav.Link className="btn mb-3" eventKey="first">Manage All Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="btn mb-3" eventKey="second">Add New Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="btn mb-3" eventKey="third">Manage All Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="btn mb-3" eventKey="fourth">Make Admin</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="btn mb-3" eventKey="fifth">Payment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="btn mb-3" eventKey="sixth">My Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="btn mb-3" eventKey="seventh">Share Your Review</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="justify-content-center my-3">
                            <Button onClick={logout} variant="outline-dark" className="d-flex justify-content-center align-items-center">
                                <AiOutlineLogout />&nbsp;Logout
                            </Button>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane transition={Fade} eventKey="first">
                                <MyOrder />
                            </Tab.Pane>
                            <Tab.Pane transition={Fade} eventKey="second">
                                <ReviewItem />
                            </Tab.Pane>
                            <Tab.Pane transition={Fade} eventKey="third">
                                <h1>Hi</h1>
                            </Tab.Pane>
                            <Tab.Pane transition={Fade} eventKey="fourth">
                                <Reviews />
                            </Tab.Pane>
                            <Tab.Pane transition={Fade} eventKey="fifth">
                                <Reviews />
                            </Tab.Pane>
                            <Tab.Pane transition={Fade} eventKey="sixth">
                                <Reviews />
                            </Tab.Pane>
                            <Tab.Pane transition={Fade} eventKey="seventh">
                                <ReviewItem />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default Dashboard;