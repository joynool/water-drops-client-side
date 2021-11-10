import React from 'react';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () =>
{
    return (
        <div>
            <Banner />
            <HomeProducts />
            <Reviews />
        </div>
    );
};

export default Home;