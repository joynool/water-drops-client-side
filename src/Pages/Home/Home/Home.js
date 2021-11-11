import React from 'react';
import Banner from '../Banner/Banner';
import DeliveryService from '../DeliveryService/DeliveryService';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () =>
{
    return (
        <>
            <Banner />
            <HomeProducts />
            <DeliveryService />
            <Reviews />
        </>
    );
};

export default Home;