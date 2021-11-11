import React from 'react';
import { Button, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import banner from './../../../images/banner.jpg';

const Banner = () =>
{
    return (
        <div className="mb-4">
            <Image src={banner} alt="Water Drops Banner" fluid />
            <div style={{ marginTop: '-140px' }}>
                <h3 className="text-center text-white fw-bold lh-1 m-0 p-0">
                    <FaQuoteLeft className="text-info" />
                    &nbsp; WE MAKE REUSABLE WATER BOTTLES FOR YOU AND YOUR FAMILY &nbsp;
                    <FaQuoteRight className="text-info" />
                </h3>
                <Nav.Link as={Link} to="/login" className="text-center">
                    <Button variant="dark" className="rounded-pill px-4 py-3">Explore Our Products</Button>
                </Nav.Link>
            </div>
        </div>
    );
};

export default Banner;

/* <div style={bg} className="img-fluid">
            <h1 style={{ textAlign: 'center', fontSize: '2.7rem', fontWeight: 'bold', paddingTop: 450 }}>
                WE MAKE REUSABLE WATER BOTTLES FOR YOU AND YOUR FAMILY
            </h1>
        </div> */