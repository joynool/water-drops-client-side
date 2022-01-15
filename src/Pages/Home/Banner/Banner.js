import React from 'react';
import { Button, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import banner from './../../../images/banner.jpg';

/*-----------------------------------------------------
            Implement top banner for home page
-------------------------------------------------------*/
const Banner = () =>
{
    return (
        <div className="mb-lg-4 d-flex flex-column justify-content-center align-items-center">
            <Image src={banner} alt="Water Drops Banner" fluid />
            <div style={{ marginTop: '-140px' }}>
                <h3 className="text-center text-white fw-bold lh-1 m-0 p-0">
                    <FaQuoteLeft className="text-info" />
                    &nbsp; WE MAKE REUSABLE WATER BOTTLES FOR YOU AND YOUR FAMILY &nbsp;
                    <FaQuoteRight className="text-info" />
                </h3>
                <Nav.Link as={Link} to="/explore-product" className="text-center">
                    <Button variant="dark" className="rounded-pill px-4 py-lg-3 shadow">Explore Our Products</Button>
                </Nav.Link>
            </div>
        </div>
    );
};

export default Banner;