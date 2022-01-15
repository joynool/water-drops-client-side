import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsGeoAlt, BsTelephone, BsEnvelope } from 'react-icons/bs';
import logo from './../../../images/logo.png';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

/*-----------------------------------------------------
            Implement footer with simple design
-------------------------------------------------------*/
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
                        <div className="my-2 text-white text-nowrap">
                            <FaQuoteRight className='fs-3' />
                            <span className='text-info fs-5 fw-light'>
                                &nbsp; Healthcare first, not wealth care...
                            </span>
                        </div>
                    </Nav>
                    <Nav className="flex-column text-center">
                        <h4 className="fs-5 text-info text-decoration-underline">Links</h4>
                        <Nav.Link as={HashLink} to="/home#home" className="m-0 p-0">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#products" className="m-0 p-0">
                            Products
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#reviews" className="m-0 p-0">
                            Customer Reviews
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" className="m-0 p-0">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                    <Nav className="flex-column align-items-center mt-3">
                        <h4 className="fs-5 text-info text-decoration-underline">Contact</h4>
                        <div className="fs-6 lh-1 text-white mt-3">
                            <p><BsGeoAlt />&nbsp;&nbsp;92/A, Dhaka - 1000, Bangladesh</p>
                            <p><BsEnvelope />&nbsp;&nbsp;Email: contact@waterdrops.com</p>
                            <p><BsTelephone />&nbsp;&nbsp;Phone: +880123456, +880654321</p>
                        </div>
                    </Nav>
                    <Nav className="flex-column align-items-center my-3">
                        <h4 className="fs-5 text-info text-decoration-underline">Follow Us</h4>
                        <Nav>
                            <Nav.Link href="/home" className="text-white fs-3" title="Facebook">
                                <FaFacebook className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-3" title="Twitter">
                                <FaTwitter className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-3" title="Google">
                                <FaGoogle className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-3" title="Instagram">
                                <FaInstagram className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="light" variant="dark">
                <Navbar.Text className="text-dark mx-auto">&copy; 2022, Water Drops. All Rights Reserved.</Navbar.Text>
            </Navbar>
        </>
    );
};

export default Footer;