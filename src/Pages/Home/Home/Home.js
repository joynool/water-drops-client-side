import React from 'react';
import Banner from '../Banner/Banner';
import DeliveryService from '../DeliveryService/DeliveryService';
import HomeProducts from '../HomeProducts/HomeProducts';
import Review from '../Reviews/Review/Review';

const Home = () =>
{
    return (
        <div id="home">
            <Banner />
            <HomeProducts />
            <DeliveryService />
            <Review />
        </div>
    );
};

export default Home;