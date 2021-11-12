import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import delivery from './../../../images/delivery.png';

const DeliveryService = () =>
{
    return (
        <div className="bg-info d-lg-flex justify-content-lg-center align-items-lg-center py-2">
            <div>
                <Image src={delivery} alt="" width="500" fluid />
            </div>
            <div className="px-5">
                <h2 className="fw-bold text-center my-3">
                    <u>Fast </u><span className="text-white"><u>Delivery</u></span><u> Service</u>
                </h2>
                <p className="fs-5 text-center fw-light my-4">Our delivery service employs more than 100 professional couriers. <br /> We will deliver water to your home for 1 hour to anywhere in the city. <br /> So feel free to order us your favorite water bottles </p>
                <ul className="d-flex flex-column align-items-center">
                    <li>Free Delivery</li>
                    <li>7 days a week</li>
                    <li>8:00 – 22:00</li>
                </ul>
                <div className="text-center my-4">
                    <Button as={Link} to="/explore-product" variant="dark" className="rounded-pill px-4 py-3 shadow">Make Your Order</Button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryService;