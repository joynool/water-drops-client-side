import React from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../../images/logo.png';
import { BsTelephone, BsEnvelope } from 'react-icons/bs';
import { BiSupport } from "react-icons/bi";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () =>
{
    const user = { email: 'mithoon@gmail.com', displayName: 'Mithoon' };

    return (
        <div className="sticky-top">
            <Navbar bg="info" variant="dark">
                <Container className="flex-column flex-lg-row">
                    <Navbar.Text className="text-dark"><BsEnvelope /> info@waterdrops.com</Navbar.Text>
                    <Navbar.Text className="text-dark"><BsTelephone /> +880123456, +880654321</Navbar.Text>
                    <Navbar.Text className="text-dark"><BiSupport /> 24x7 (Friday Off)</Navbar.Text>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home" className="my-2">
                        <Image src={logo} width="250px" alt="water drops" fluid />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto justify-content-center align-items-center">
                            <Nav.Link as={HashLink} to="/home#home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#products">
                                Products
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#reviews">
                                Customer Reviews
                            </Nav.Link>
                            {
                                user.email ? <NavDropdown title={user.displayName} id="collasible-nav-dropdown" className=" text-center">
                                    <NavDropdown.Item as={Link} to="/my-dashboard">My Dashboard</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <div className="text-center">
                                        <Button variant="btn btn-outline-dark" className="ms-auto">Logout</Button>
                                    </div>
                                </NavDropdown> : <Nav.Link as={Link} to="/login">
                                    <Button variant="btn btn-outline-dark">Login</Button>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;