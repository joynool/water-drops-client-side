import React from 'react';
import Banner from '../Banner/Banner';
import DeliveryService from '../DeliveryService/DeliveryService';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReviews from '../Reviews/HomeReviews/HomeReviews';

/*-----------------------------------------------------
                    Implement home page
-------------------------------------------------------*/
const Home = () =>
{
    return (
        <div id="home">
            <Banner />
            <HomeProducts />
            <DeliveryService />
            <HomeReviews />
        </div>
    );
};

export default Home;