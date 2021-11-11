import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import logo from './../../../images/logo.png';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () =>
{
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="flex-column flex-lg-row">
                    <Nav className="d-flex flex-column align-items-center my-3">
                        <Navbar.Brand href="/home" className="mx-auto">
                            <Image src={logo} width="350px" alt="" fluid />
                        </Navbar.Brand>
                        <div className="my-2 text-white">
                            <FaQuoteLeft />&nbsp; Healthcare first, not wealth care... &nbsp;<FaQuoteRight />
                        </div>
                    </Nav>
                    <Nav className="flex-column text-center">
                        <h4 className="text-white">Links</h4>
                        <Nav.Link as={HashLink} to="/home#home" className="m-0 p-0">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#service" className="m-0 p-0">
                            Products
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#things-to-do" className="m-0 p-0">
                            Customer Reviews
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#things-to-do" className="m-0 p-0">
                            FAQ
                        </Nav.Link>
                    </Nav>
                    <Nav className="flex-column align-items-center mt-3">
                        <h4 className="text-white">Contact Us</h4>
                        <div className="fs-6 lh-1 text-white mt-3">
                            <p>92/A, Dhaka - 1000, Bangladesh</p>
                            <p>Email: contact@waterdrops.com</p>
                            <p>Phone: +880123456, +880654321</p>
                        </div>
                    </Nav>
                    <Nav className="flex-column align-items-center my-3">
                        <h4 className="text-white">Follow Us</h4>
                        <Nav>
                            <Nav.Link href="/home" className="text-white fs-1" title="Facebook">
                                <FaFacebook className="btn-outline-info rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-1" title="Twitter">
                                <FaTwitter className="btn-outline-info rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-1" title="Google">
                                <FaGoogle className="btn-outline-info rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-1" title="Instagram">
                                <FaInstagram className="btn-outline-info rounded p-1" />
                            </Nav.Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="info" variant="dark">
                <Navbar.Text className="text-dark mx-auto">&copy; 2021, Water Drops. All Rights Reserved.</Navbar.Text>
            </Navbar>
        </>
    );
};

export default Footer;